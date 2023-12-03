import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const ThrottlingScreen = () => {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleIncrease = () => {
    if (!isDisabled) {
      setIsDisabled(true);
      setCount(prev => prev + 1);
      setTimeout(() => {
        setIsDisabled(false);
      }, 1000);
    }
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
        ThrottlingScreen
      </Text>
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          fontSize: 30,
        }}>
        {count}
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

export default ThrottlingScreen;
