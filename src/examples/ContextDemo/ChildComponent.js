import React, {useContext, useEffect} from 'react';
import {MyContext} from './ParentComponent';
import {Text, View, Alert} from 'react-native';
import SecondChild from './SecondChild';

function ChildComponent() {
  // sử dụng useContext để lấy giá trị của MyContext
  const {alert} = useContext(MyContext);

  useEffect(() => {
    if (alert) {
      Alert.alert(alert);
    }
  }, [alert]);

  return (
    <View>
      <SecondChild />
    </View>
  );
}

export default ChildComponent;
