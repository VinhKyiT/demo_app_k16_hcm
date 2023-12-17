import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import AuthProvider from '~contexts/AuthProvider';
import CartProvider from '~contexts/CartProvider';
import MainNavigator from './src/routes/MainNavigator';

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
