import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

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

  const getData = async (offset, limit) => {
    const url = `http://store.kybuidev.com/api/v1/products?offset=${offset}&limit=${limit}`;
    console.log(url);
    return await fetch(url);
  };

  useEffect(() => {
    getData(0, 30)
      .then(res => res.json())
      .then(res => setListData(res))
      .catch();
  }, []);

  const onRefresh = useCallback(() => {
    try {
      if (refreshing) {
        return;
      }
      setRefreshing(true);
      setTimeout(() => {
        setListData(prev => [
          {id: '12', name: 'Nguyen Van G', age: 40},
          ...prev,
        ]);
        setRefreshing(false);
      }, 4000);
    } catch (error) {
    } finally {
    }
  }, [refreshing]);

  const handleLoadMore = () => {
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
    } finally {
    }
  };

  const ListHeaderComponent = useCallback(() => {
    console.log('loadingMore', loadingMore);
    return listData.length !== 0 ? (
      loadingMore ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 16,
            fontSize: 20,
            fontWeight: '500',
            color: '#000',
          }}>
          Đã hết
        </Text>
      )
    ) : null;
  }, [listData.length, loadingMore]);

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
      ItemSeparatorComponent={<View style={{height: 20}} />}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
      ListHeaderComponent={
        <Text
          style={{
            alignSelf: 'center',
            marginBottom: 16,
            fontSize: 20,
            fontWeight: '500',
            color: '#000',
          }}>
          Danh sách FlatList
        </Text>
      }
      ListFooterComponent={ListHeaderComponent}
      renderItem={({item}) => (
        <View
          style={{
            padding: 16,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 16,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text>Tên: </Text>
            <Text>{item.title}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 4}}>
            <Text>Giá: </Text>
            <Text>{item.price}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default FlatListDemo;
