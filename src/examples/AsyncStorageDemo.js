import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalStorage from '../helpers/storage';

const AsyncStorageDemo = () => {
  const [value, setValue] = useState('');
  const [storedValue, setStoredValue] = useState({});
  // const storeData = async () => {
  //   try {
  //     const result = await AsyncStorage.setItem('KEY_A', JSON.stringify({value, type: 'string'}));
  //     console.log('result', result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const retrieveData = async () => {
    try {
      const data = await AsyncStorage.getItem('KEY_A');
      console.log('data', data);
      if (data !== null) {
        const actualData = await JSON.parse(data);
        console.log('actualData', actualData);
        setStoredValue(actualData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 16}}>
      <View style={{flex: 1}}>
        <TextInput
          value={value}
          onChangeText={setValue}
          style={{
            borderWidth: 1,
            borderRadius: 8,
            borderColor: 'black',
            marginVertical: 16,
            paddingHorizontal: 16,
          }}
          placeholder="Nhập nội dung cần lưu"
        />
        <CustomButton
          title={'Lưu'}
          onPress={() => {
            LocalStorage.storeData('KEY_A', {value, type: 'string'});
          }}
        />
        <CustomButton
          title={'Xoá'}
          onPress={() => {
            LocalStorage.removeData('KEY_A');
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <CustomButton title={'Lấy dữ liệu'} onPress={retrieveData} />
        <Text>{storedValue?.value}</Text>
      </View>
    </View>
  );
};

export default AsyncStorageDemo;
