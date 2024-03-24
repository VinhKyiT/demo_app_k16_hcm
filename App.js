import {NavigationContainer} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';
import MainNavigator from './src/routes/MainNavigator';
import NavigationServices from './src/utils/NavigationServices';
import {initLocale} from './src/i18n';
import AppModal from './src/components/AppModal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from '~redux/store';
const App = () => {
  useLayoutEffect(() => {
    initLocale();
  }, []);

  return (
    <NavigationContainer ref={NavigationServices.navigationRef}>
      <View style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Provider store={store}>
            <MainNavigator />
            <AppModal />
          </Provider>
        </GestureHandlerRootView>
      </View>
    </NavigationContainer>
  );
};

export default App;
