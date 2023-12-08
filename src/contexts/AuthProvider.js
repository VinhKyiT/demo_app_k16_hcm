import React, {createContext, useState, useCallback} from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState('');

  const handleLogin = useCallback(async (_email, _password) => {
    setIsLoading(true);
    try {
      const userJson = await fetch('https://store.kybuidev.com/api/v1/users/3');
      const user = await userJson.json();
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

  return (
    <AuthContext.Provider value={{isLoggedIn, isLoading, handleLogin, error, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
