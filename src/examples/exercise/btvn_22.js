import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useReducer,
} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FONTS} from '../../constants/fonts';
import UserItem from '../../components/UserItem';

// Gia tri khoi tao
const initialState = {
  listData: [],
  refreshing: false,
  loadingMore: false,
};

// Actions
const SET_DATA = 'SET_DATA';
const SET_REFRESHING = 'SET_REFRESHING';
const SET_LOADING_MORE = 'SET_LOADING_MORE';
const LOAD_MORE = 'LOAD_MORE';

// Reducer
const reducer = (state, action) => {
  const {payload, type} = action;
  switch (type) {
    case SET_DATA:
      return {
        ...state,
        listData: payload || [],
      };
    case LOAD_MORE:
      return {
        ...state,
        listData: [...state.listData, ...payload],
      };
    case SET_REFRESHING:
      return {
        ...state,
        refreshing: payload,
      };
    case SET_LOADING_MORE:
      return {
        ...state,
        loadingMore: payload,
      };
  }
};

const FlatListUser = () => {
  const [isEndList, setIsEndList] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(30);

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  const flatListRef = useRef();

  const getData = useCallback(async (skip, limit) => {
    const url = `https://dummyjson.com/users?skip=${skip}&limit=${limit}`;
    return await fetch(url);
  }, []);

  useEffect(() => {
    getData(0, 30)
      .then(res => res.json())
      .then(res => {
        // setListData(res?.users);
        dispatch({type: SET_DATA, payload: res?.users});
      })
      .catch(err => console.log(err));
  }, [getData]);

  const onRefresh = useCallback(() => {
    try {
      if (state.refreshing) {
        return;
      }
      dispatch({type: SET_REFRESHING, payload: true});
      getData(0, 30)
        .then(res => res.json())
        .then(res => {
          // setListData(res?.users);
          dispatch({type: SET_DATA, payload: res?.users});
          dispatch({type: SET_REFRESHING, payload: false});
          setIsEndList(false);
          setCurrentOffset(30);
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, [getData, state.refreshing]);

  const handleLoadMore = useCallback(() => {
    try {
      if (state.loadingMore || isEndList || state.listData?.length === 0) {
        return; // Đã đang trong quá trình tải hoặc đã tải hết dữ liệu
      }
      // setLoadingMore(true);
      dispatch({type: SET_LOADING_MORE, payload: true});
      console.log('Load more...');
      getData(currentOffset, 10)
        .then(res => res.json())
        .then(res => {
          if (res?.users?.length === 0) {
            setIsEndList(true);
          }
          // setListData(prev => [...prev, ...res?.users]);
          dispatch({type: LOAD_MORE, payload: res?.users});
          setCurrentOffset(currentOffset + 10);
          dispatch({type: SET_LOADING_MORE, payload: false});
        })
        .catch();
    } catch (error) {
      console.log(error);
    }
  }, [
    currentOffset,
    getData,
    isEndList,
    state.listData?.length,
    state.loadingMore,
  ]);

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
        {state.listData.length !== 0 ? (
          isEndList ? (
            <Text style={styles.endListText}>Đã hết</Text>
          ) : state.loadingMore ? (
            <ActivityIndicator />
          ) : null
        ) : null}
      </View>
    );
  }, [isEndList, state.listData.length, state.loadingMore]);

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

  const renderItem = useCallback(({item}) => <UserItem item={item} />, []);

  return (
    <FlatList
      ref={flatListRef}
      data={state.listData}
      keyExtractor={item => item.id}
      extraData={state.loadingMore}
      refreshControl={
        <RefreshControl
          refreshing={state.refreshing}
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

export default FlatListUser;

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
