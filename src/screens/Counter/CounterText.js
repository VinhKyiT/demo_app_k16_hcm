import {View, Text} from 'react-native';
import React from 'react';
import useCounter from '~hooks/useCounter';

const CounterText = () => {
  const {count} = useCounter();
  return (
    <View>
      <Text style={{color: '#000', fontSize: 50, paddingHorizontal: 20}}>{count}</Text>
    </View>
  );
};

export default CounterText;
