import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {FONTS} from '../constants/fonts';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ProductItem from '../components/ProductItem';
import {ENV} from '../constants/env';
import useAuth from '~hooks/useAuth';
import {useNavigation} from '@react-navigation/native';
import useCart from '~hooks/useCart';

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

// initialState
const listInitialState = {
  listData: [],
  isEndList: false,
  refreshing: false,
  loadingMore: false,
};

// reducer
const listReducer = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case GET_DATA:
      return {
        ...state,
        listData: payload,
      };
    case REFRESH_LIST:
      return {
        ...state,
        isEndList: false,
        listData: payload,
        refreshing: false,
      };
    case LOAD_MORE:
      return {
        ...state,
        listData: [...state.listData, ...payload],
        loadingMore: false,
      };
    case SET_IS_END_LIST:
      return {
        ...state,
        isEndList: payload,
      };
    case SET_IS_REFRESHING:
      return {
        ...state,
        refreshing: payload,
      };
    case SET_IS_LOAD_MORE:
      return {
        ...state,
        loadingMore: payload,
      };
    default:
      return state;
  }
};

// actions
const GET_DATA = 'GET_DATA';
const REFRESH_LIST = 'REFRESH_LIST';
const LOAD_MORE = 'LOAD_MORE';
const SET_IS_REFRESHING = 'SET_IS_REFRESHING';
const SET_IS_LOAD_MORE = 'SET_IS_LOAD_MORE';
const SET_IS_END_LIST = 'SET_IS_END_LIST';

const FlatListDemo = () => {
  const [currentOffset, setCurrentOffset] = useState(30);
  const [state, dispatch] = useReducer(listReducer, listInitialState);
  const {userInfo: user} = useAuth();
  const {handleAddToCart, handleRemoveFromCart} = useCart();

  const navigation = useNavigation();

  const flatListRef = useRef();

  const getData = useCallback(async (offset, limit) => {
    const url = `http://store.kybuidev.com/api/v1/products?offset=${offset}&limit=${limit}`;
    console.log(url);
    return await fetch(url);
  }, []);

  useEffect(() => {
    getData(0, 30)
      .then(res => res.json())
      .then(res => {
        dispatch({type: GET_DATA, payload: res});
      })
      .catch(err => console.log(err));
  }, [getData]);

  const onRefresh = useCallback(() => {
    try {
      if (state.refreshing) {
        return;
      }
      // setRefreshing(true);
      dispatch({type: SET_IS_REFRESHING, payload: true});
      getData(0, 30)
        .then(res => res.json())
        .then(res => {
          dispatch({type: REFRESH_LIST, payload: res});
          dispatch({type: SET_IS_END_LIST, payload: false});
          setCurrentOffset(30);
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, [getData, state.refreshing]);

  const handleLoadMore = useCallback(() => {
    try {
      if (state.loadingMore || state.isEndList || state.listData?.length === 0) {
        return; // Đã đang trong quá trình tải hoặc đã tải hết dữ liệu
      }
      dispatch({type: SET_IS_LOAD_MORE, payload: true});
      console.log('Load more...');
      getData(currentOffset, 10)
        .then(res => res.json())
        .then(res => {
          if (res?.length === 0) {
            dispatch({type: SET_IS_END_LIST, payload: true});
          }
          // setListData(prev => [...prev, ...res]);
          dispatch({type: LOAD_MORE, payload: res});
          setCurrentOffset(currentOffset + 10);
        })
        .catch();
    } catch (error) {
      console.log(error);
    }
  }, [currentOffset, getData, state.isEndList, state.listData?.length, state.loadingMore]);

  const ItemSeparatorComponent = useCallback(() => <View style={styles.itemSeparator} />, []);

  const ListFooterComponent = useCallback(() => {
    // 1. Kiểm tra listData.length, nếu bằng 0 thì không render ra gì hết.
    // 2. Kiểm tra isEndList, nếu là true thì render ra chữ "Đã hết"
    // 3. Kiểm tra loadingMore, nếu là true thì hiển thị ActivityIndicator.
    // 4. Ngược lại thì không hiển thị gì hết (null)
    return (
      <View style={styles.listFooterContainer}>
        {state.listData.length !== 0 ? (
          state.isEndList ? (
            <Text style={styles.endListText}>Đã hết</Text>
          ) : state.loadingMore ? (
            <ActivityIndicator />
          ) : null
        ) : null}
      </View>
    );
  }, [state.isEndList, state.listData.length, state.loadingMore]);

  const ListHeaderComponent = useCallback(() => {
    return (
      <View style={styles.listHeaderContainer}>
        <FontAwesome name="fighter-jet" size={24} color={'red'} style={{marginRight: 8}} />
        <Text style={styles.listHeaderText}>Xin chào, {user.name}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Cart')}>
          <AntDesign name="shoppingcart" size={24} color={'green'} style={{marginLeft: 8}} />
        </TouchableOpacity>
      </View>
    );
  }, [navigation, user.name]);

  const renderItem = useCallback(
    ({item}) => <ProductItem item={item} onAddToCart={() => handleAddToCart(item)} />,
    [handleAddToCart],
  );

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
      onEndReachedThreshold={0.5}
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
    flexGrow: 1,
    textAlign: 'center',
  },
  itemSeparator: {
    height: 20,
  },
  listHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
