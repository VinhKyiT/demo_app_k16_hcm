import React, {createContext, useState, useCallback} from 'react';
import axios from 'axios';
import LocalStorage from '../helpers/storage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState('');

  const handleLogin = useCallback(async (_email, _password, isRememberLogin) => {
    setIsLoading(true);
    try {
      // const userResponse = await axios.get('https://store.kybuidev.com/api/v1/users/1');
      // const user = await userResponse.data;
      // if (user) {
      //   if (user.email !== _email) {
      //     setError('Vui long nhap dung email');
      //     setIsLoading(false);
      //     return;
      //   }
      //   if (user.password !== _password) {
      //     setError('Vui long nhap dung password');
      //     setIsLoading(false);
      //     return;
      //   }
      //   setIsLoggedIn(true);
      //   setIsLoading(false);
      //   setUserInfo(user);
      //   setError('');
      // }
      const response = await axios.post('https://store.kybuidev.com/api/v1/auth/login', {
        email: _email,
        password: _password,
      });
      console.log('response', response);
      if (response?.data?.access_token) {
        const userData = await axios.get('https://store.kybuidev.com/api/v1/auth/profile', {
          headers: {
            Authorization: `Bearer ${response?.data?.access_token}`,
          },
        });
        if (userData?.data) {
          if (isRememberLogin) {
            LocalStorage.storeData('ACCESS_TOKEN', response?.data?.access_token);
            LocalStorage.storeData('REFRESH_TOKEN', response?.data?.refresh_token);
          }
          setIsLoggedIn(true);
          setIsLoading(false);
          setUserInfo(userData?.data);
          setError('');
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleRegister = async (_email, _password, _name, onSuccess) => {
    try {
      const res = await axios.post('https://store.kybuidev.com/api/v1/users', {
        name: _name,
        email: _email,
        password: _password,
        avatar: 'https://picsum.photos/800',
        role: 'customer',
      });
      console.log('res', res);
      if (res?.status === 201) {
        onSuccess?.(res?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const setLogin = useCallback(value => {
    setIsLoggedIn(value);
  }, []);

  const handleLogout = useCallback(async () => {
    await LocalStorage.removeData('ACCESS_TOKEN');
    await LocalStorage.removeData('REFRESH_TOKEN');
    setUserInfo({});
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        handleLogin,
        handleRegister,
        error,
        userInfo,
        setLogin,
        handleLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
