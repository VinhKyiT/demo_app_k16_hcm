import React from 'react';
import {StatusBar, View} from 'react-native';
import SwitchExample from './src/examples/Switch';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <StatusBar barStyle={'light-content'} backgroundColor={'red'} /> */}
      <SwitchExample />
    </View>
  );
};

export default App;
