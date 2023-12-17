import {View, Text, TextInput, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '~components/CustomButton';
import useAuth from '~hooks/useAuth';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {handleLogin, error, isLoading} = useAuth();

  const navigation = useNavigation();

  useEffect(() => {
    if (error) {
      Alert.alert('Thong bao', error);
    }
  }, [error]);

  return (
    <View style={{marginHorizontal: 16}}>
      <Text style={{textAlign: 'center', fontSize: 24, color: '#000'}}>Đăng nhập</Text>
      <TextInput
        style={{
          marginHorizontal: 16,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#000',
          marginVertical: 8,
        }}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{
          marginHorizontal: 16,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#000',
          marginVertical: 8,
        }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton
        title={'Đăng nhập'}
        onPress={() => handleLogin(email, password)}
        isLoading={isLoading}
      />
      <CustomButton
        title={'Đăng ký ngay!'}
        onPress={() => navigation.navigate('Register')}
        isLoading={isLoading}
        containerStyle={{marginTop: 16}}
      />
    </View>
  );
};

export default LoginScreen;
