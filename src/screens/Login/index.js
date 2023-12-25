import {View, Text, TextInput, Alert, Switch} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from '~components/CustomButton';
import useAuth from '~hooks/useAuth';
import {useRoute} from '@react-navigation/native';
import NavigationServices from '../../utils/NavigationServices';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberLogin, setIsRememberLogin] = useState(false);

  const {handleLogin, error, isLoading} = useAuth();

  const {params} = useRoute();

  useEffect(() => {
    if (error) {
      Alert.alert('Thong bao', error);
    }
  }, [error]);

  useEffect(() => {
    if (params?.registeredEmail) {
      setEmail(params.registeredEmail);
    }
  }, [params]);

  return (
    <View style={{marginHorizontal: 16}}>
      <Text style={{textAlign: 'center', fontSize: 24, color: '#000'}}>Đăng nhập</Text>
      <TextInput
        style={{
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
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#000',
          marginVertical: 8,
        }}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 16}}>
        <Switch
          value={isRememberLogin}
          onValueChange={setIsRememberLogin}
          style={{
            alignSelf: 'flex-start',
            marginRight: 16,
          }}
        />
        <Text>Ghi nhớ đăng nhập</Text>
      </View>
      <CustomButton
        title={'Đăng nhập'}
        onPress={() => handleLogin(email, password, isRememberLogin)}
        isLoading={isLoading}
      />
      <CustomButton
        title={'Đăng ký ngay!'}
        onPress={() => NavigationServices.navigate('Register')}
        containerStyle={{marginTop: 16}}
      />
    </View>
  );
};

export default LoginScreen;
