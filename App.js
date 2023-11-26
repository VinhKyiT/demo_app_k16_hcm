import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import MainNavigator from './src/routes/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <MainNavigator />
      </View>
    </NavigationContainer>
  );
};

export default App;
