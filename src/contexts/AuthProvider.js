import React, {createContext, useState, useCallback} from 'react';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState('');

  const handleLogin = useCallback(async (_email, _password) => {
    setIsLoading(true);
    try {
      const userResponse = await axios.get('https://store.kybuidev.com/api/v1/users/1');
      const user = await userResponse.data;
      if (user) {
        if (user.email !== _email) {
          setError('Vui long nhap dung email');
          setIsLoading(false);
          return;
        }
        if (user.password !== _password) {
          setError('Vui long nhap dung password');
          setIsLoading(false);
          return;
        }
        setIsLoggedIn(true);
        setIsLoading(false);
        setUserInfo(user);
        setError('');
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleRegister = async (_email, _password, _name) => {
    try {
      const res = await axios.post('https://store.kybuidev.com/api/v1/users', {
        name: _name,
        email: _email,
        password: _password,
        avatar: 'https://picsum.photos/800',
        role: 'customer',
      });
      console.log('res', res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{isLoggedIn, isLoading, handleLogin, handleRegister, error, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
