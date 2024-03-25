import {NavigationContainer} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {View} from 'react-native';
import MainNavigator from './src/routes/MainNavigator';
import NavigationServices from './src/utils/NavigationServices';
import {initLocale} from './src/i18n';
import AppModal from './src/components/AppModal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store, persistor} from '~redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {RootSiblingParent} from 'react-native-root-siblings';

const App = () => {
  useLayoutEffect(() => {
    initLocale();
  }, []);

  return (
    <NavigationContainer ref={NavigationServices.navigationRef}>
      <View style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
              <RootSiblingParent>
                <MainNavigator />
                <AppModal />
              </RootSiblingParent>
            </PersistGate>
          </Provider>
        </GestureHandlerRootView>
      </View>
    </NavigationContainer>
  );
};

export default App;
