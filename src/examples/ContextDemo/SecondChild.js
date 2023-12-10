import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {MyContext} from './ParentComponent';

const SecondChild = () => {
  const {greet} = useContext(MyContext);
  return (
    <View>
      <Text style={{color: 'blue', fontSize: 30}}>Data from Context: {greet}</Text>
    </View>
  );
};

export default SecondChild;
