import {View, Text, TouchableOpacity} from 'react-native';
import React, {createContext, useReducer} from 'react';
import CounterText from './CounterText';

export const CounterContext = createContext();

const initialCounterState = {
  count: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialCounterState);
  const handleIncrement = () => {
    dispatch({type: 'INCREMENT'});
  };
  const handleDecrement = () => {
    dispatch({type: 'DECREMENT'});
  };
  return (
    <CounterContext.Provider value={state}>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={handleDecrement}>
          <Text style={{color: '#000', fontSize: 40}}>-</Text>
        </TouchableOpacity>
        <CounterText />
        <TouchableOpacity onPress={handleIncrement}>
          <Text style={{color: '#000', fontSize: 40}}>+</Text>
        </TouchableOpacity>
      </View>
    </CounterContext.Provider>
  );
};

export default Counter;
