import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import MainNavigator from './src/routes/MainNavigator';
import AuthProvider from '~contexts/AuthProvider';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <AuthProvider>
          <MainNavigator />
        </AuthProvider>
      </View>
    </NavigationContainer>
  );
};

export default App;
