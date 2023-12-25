import {NavigationContainer} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';
import AuthProvider from '~contexts/AuthProvider';
import CartProvider from '~contexts/CartProvider';
import MainNavigator from './src/routes/MainNavigator';
import NavigationServices from './src/utils/NavigationServices';
import {initLocale} from './src/i18n';
import AppModal from './src/components/AppModal';

const App = () => {
  useLayoutEffect(() => {
    initLocale();
  }, []);
  return (
    <NavigationContainer ref={NavigationServices.navigationRef}>
      <View style={{flex: 1}}>
        <AuthProvider>
          <CartProvider>
            <MainNavigator />
            <AppModal />
          </CartProvider>
        </AuthProvider>
      </View>
    </NavigationContainer>
  );
};

export default App;
