import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {FONTS} from '../constants/fonts';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductItem from '../components/ProductItem';
import {ENV} from '../constants/env';

const data = [
  {id: '1', name: 'Nguyen Van A', age: 20},
  {id: '2', name: 'Tran Van B', age: 21},
  {id: '3', name: 'Le Thi C', age: 22},
  {id: '4', name: 'Bui Minh D', age: 23},
  {id: '5', name: 'Le Van E', age: 24},
  {id: '6', name: 'Tran Dinh F', age: 25},
  {id: '7', name: 'Nguyen Cong G', age: 26},
  {id: '8', name: 'Bui Thi H', age: 27},
  {id: '9', name: 'Dang Ngoc X', age: 28},
  {id: '10', name: 'Do Van Y', age: 29},
  {id: '11', name: 'Tran Thi Z', age: 30},
  // ...
];

const FlatListDemo = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [listData, setListData] = useState([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isEndList, setIsEndList] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(30);

  const flatListRef = useRef();

  const getData = useCallback(async (offset, limit) => {
    const url = `http://store.kybuidev.com/api/v1/products?offset=${offset}&limit=${limit}`;
    console.log(url);
    return await fetch(url);
  }, []);

  useEffect(() => {
    getData(0, 30)
      .then(res => res.json())
      .then(res => setListData(res))
      .catch(err => console.log(err));
  }, [getData]);

  const onRefresh = useCallback(() => {
    try {
      if (refreshing) {
        return;
      }
      setRefreshing(true);
      getData(0, 30)
        .then(res => res.json())
        .then(res => {
          setListData(res);
          setRefreshing(false);
          setIsEndList(false);
          setCurrentOffset(30);
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, [getData, refreshing]);

  const handleLoadMore = useCallback(() => {
    try {
      if (loadingMore || isEndList || listData?.length === 0) {
        return; // Đã đang trong quá trình tải hoặc đã tải hết dữ liệu
      }
      setLoadingMore(true);
      console.log('Load more...');
      getData(currentOffset, 10)
        .then(res => res.json())
        .then(res => {
          if (res?.length === 0) {
            setIsEndList(true);
          }
          setListData(prev => [...prev, ...res]);
          setCurrentOffset(currentOffset + 10);
          setLoadingMore(false);
        })
        .catch();
    } catch (error) {
      console.log(error);
    }
  }, [currentOffset, getData, isEndList, listData?.length, loadingMore]);

  const ItemSeparatorComponent = useCallback(
    () => <View style={styles.itemSeparator} />,
    [],
  );

  const ListFooterComponent = useCallback(() => {
    // 1. Kiểm tra listData.length, nếu bằng 0 thì không render ra gì hết.
    // 2. Kiểm tra isEndList, nếu là true thì render ra chữ "Đã hết"
    // 3. Kiểm tra loadingMore, nếu là true thì hiển thị ActivityIndicator.
    // 4. Ngược lại thì không hiển thị gì hết (null)
    return (
      <View style={styles.listFooterContainer}>
        {listData.length !== 0 ? (
          isEndList ? (
            <Text style={styles.endListText}>Đã hết</Text>
          ) : loadingMore ? (
            <ActivityIndicator />
          ) : null
        ) : null}
      </View>
    );
  }, [isEndList, listData.length, loadingMore]);

  const ListHeaderComponent = useCallback(() => {
    return (
      <View style={styles.listHeaderContainer}>
        <FontAwesome
          name="fighter-jet"
          size={24}
          color={'red'}
          style={{marginRight: 8}}
        />
        <Text style={styles.listHeaderText}>Danh sách FlatList</Text>
        <View>
          <AntDesign
            name="pluscircleo"
            size={24}
            color={'green'}
            style={{marginLeft: 8}}
          />
        </View>
      </View>
    );
  }, []);

  const renderItem = useCallback(({item}) => <ProductItem item={item} />, []);

  return (
    <FlatList
      ref={flatListRef}
      data={listData}
      keyExtractor={item => item.id}
      extraData={loadingMore}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['red', 'orange', 'blue', 'green']}
        />
      }
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
      initialNumToRender={12}
      windowSize={25}
      ItemSeparatorComponent={ItemSeparatorComponent}
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
      renderItem={renderItem}
    />
  );
};

export default FlatListDemo;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  listFooterContainer: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  endListText: {
    alignSelf: 'center',
    marginTop: 16,
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  listHeaderText: {
    alignSelf: 'center',
    marginBottom: 16,
    fontSize: 20,
    color: '#000',
    fontFamily: FONTS.MEDIUM,
  },
  itemSeparator: {
    height: 20,
  },
  listHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
