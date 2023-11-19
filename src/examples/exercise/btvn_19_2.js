/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

const Exercise2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoadingLoginButton, setIsLoadingLoginButton] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleLogin = () => {
    // setIsLoggedIn(true);
    // console.log(email, password);
    setIsLoadingLoginButton(true);
    setTimeout(() => {
      setIsLoadingLoginButton(false);
      if (email && password) {
        setIsLoggedIn(true);
      }
    }, 1000);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const validateEmail = useCallback(emailToValidate => {
    const expression =
      /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/i;
    return expression.test(String(emailToValidate).toLowerCase());
  }, []);

  const CustomButton = ({title, onPress, isLoading}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: 'skyblue',
        }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
        )}
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (email !== '') {
      if (validateEmail(email)) {
        setEmailError('');
      } else {
        setEmailError('Vui lòng nhập đúng định dạng email');
      }
    } else {
      setEmailError('');
    }
  }, [email]);

  return (
    <View style={{flex: 1}}>
      {isLoggedIn ? (
        <>
          <View>
            <Text style={{color: 'black', fontSize: 20}}>Bui Pham Vinh Ky</Text>
            <Text style={{color: 'black', fontSize: 20}}>
              kybuidev@gmail.com
            </Text>
            <CustomButton title={'Logout'} onPress={handleLogout} />
          </View>
        </>
      ) : (
        <>
          <View>
            <Text style={{color: 'black', fontSize: 20}}>
              Vui lòng đăng nhập
            </Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="Vui lòng nhập email"
            />
            {!!emailError && (
              <Text style={styles.emailErrorText}>{emailError}</Text>
            )}
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={styles.input}
              placeholder="Vui lòng nhập mật khẩu"
            />
            <CustomButton
              title={'Login'}
              onPress={handleLogin}
              isLoading={isLoadingLoginButton}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginVertical: 8,
  },
  emailErrorText: {
    color: 'red',
    fontSize: 12,
    fontWeight: '500',
  },
});
