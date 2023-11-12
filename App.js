import React from 'react';
import {Image, ImageBackground, StatusBar, Text, View} from 'react-native';
import SwitchExample from './src/examples/Switch';
import PositionLayout from './src/examples/PositionLayoutExample';
import DisplayAnImageWithStyle from './src/examples/ImageResizeMode';
import Layout01 from './src/examples/Layout01';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <StatusBar barStyle={'light-content'} backgroundColor={'red'} /> */}
      {/* <SwitchExample /> */}
      <Layout01 />
    </View>
  );
};

export default App;
