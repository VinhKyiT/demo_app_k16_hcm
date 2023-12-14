import {View, Text, TextInput, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '~components/CustomButton';
import useAuth from '~hooks/useAuth';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const {handleRegister} = useAuth();

  return (
    <View style={{paddingHorizontal: 16}}>
      <Text style={{textAlign: 'center', fontSize: 24, color: '#000'}}>Đăng nhập</Text>
      <TextInput
        style={{
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#000',
          marginVertical: 8,
        }}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#000',
          marginVertical: 8,
        }}
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={{
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#000',
          marginVertical: 8,
        }}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomButton title={'Đăng ký'} onPress={() => handleRegister(email, password, name)} />
    </View>
  );
};

export default RegisterScreen;
