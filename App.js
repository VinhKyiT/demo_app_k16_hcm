import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import MainNavigator from './src/routes/MainNavigator';
import AuthProvider from '~contexts/AuthProvider';
import CartProvider from '~contexts/CartProvider';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <AuthProvider>
          <CartProvider>
            <MainNavigator />
          </CartProvider>
        </AuthProvider>
      </View>
    </NavigationContainer>
  );
};

export default App;
