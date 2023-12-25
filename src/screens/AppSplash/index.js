import React, {useCallback, useEffect} from 'react';
import {View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import useAuth from '../../hooks/useAuth';

const AppSplash = () => {
  const {getLoginStatus} = useAuth();
  const retrieveLoggedInData = useCallback(async () => {
    await getLoginStatus();
  }, [getLoginStatus]);
  useEffect(() => {
    retrieveLoggedInData().finally(() => SplashScreen.hide());
  }, [retrieveLoggedInData]);
  return <View />;
};

export default AppSplash;
