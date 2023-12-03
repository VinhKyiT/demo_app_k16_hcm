import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useReducer} from 'react';

const initialState = {
  count: 0,
  isLoading: false,
};

const counterReducer = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

const UseReducerDemo = () => {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(counterReducer, initialState);

  console.log('state', state);

  const handleIncrease = () => {
    // setCount(prev => prev + 1);
    dispatch({type: 'INCREMENT'});
  };
  const handleDecrease = () => {
    // setCount(prev => prev - 1);
    dispatch({type: 'DECREMENT'});
  };

  return (
    <View>
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          color: '#000',
          fontSize: 20,
        }}>
        UseReducerDemo
      </Text>
      <TouchableOpacity onPress={handleDecrease}>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
          }}>
          Decrease
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          fontSize: 30,
        }}>
        {state.count}
      </Text>
      <TouchableOpacity onPress={handleIncrease}>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
          }}>
          Increase
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseReducerDemo;
