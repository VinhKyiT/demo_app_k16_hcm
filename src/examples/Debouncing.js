import {View, Text, TextInput} from 'react-native';
import React, {useState, useRef, useCallback} from 'react';

const DebouncingScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [txt, setTxt] = useState('');
  const typingTimerRef = useRef();

  const handleInputChange = useCallback(text => {
    setSearchTerm(text);
    if (typingTimerRef?.current) {
      clearTimeout(typingTimerRef.current);
    }
    typingTimerRef.current = setTimeout(() => {
      // do something...
      setTxt(text);
    }, 500);
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          color: '#000',
          fontSize: 20,
        }}>
        Debouncing {txt}
      </Text>
      <TextInput
        value={searchTerm}
        onChangeText={handleInputChange}
        style={{
          width: '100%',
          height: 50,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: 'black',
        }}
      />
    </View>
  );
};

export default DebouncingScreen;
