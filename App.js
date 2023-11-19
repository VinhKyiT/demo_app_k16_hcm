import React from 'react';
import {View} from 'react-native';
import Layout02 from './src/examples/Layout02';
import KeyboardAvoidingViewDemo from './src/examples/KeyboardAVDemo';
import ResponsiveDemo from './src/examples/ResponsiveDemo';
import IfElse from './src/examples/conditionalRendering/ifElse';
import Ternary from './src/examples/conditionalRendering/ternary';
import LogicalAndOperator from './src/examples/conditionalRendering/logicalAndOperator';
import LogicalOrOperator from './src/examples/conditionalRendering/logicalOrOperator';
import SwitchStatement from './src/examples/conditionalRendering/switch';
import Exercise1 from './src/examples/conditionalRendering/exercise1';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <StatusBar barStyle={'light-content'} backgroundColor={'red'} /> */}
      {/* <SwitchExample /> */}
      {/* <Layout02 /> */}
      {/* <KeyboardAvoidingViewDemo /> */}
      {/* <ResponsiveDemo /> */}
      {/* <IfElse condition /> */}
      {/* <Ternary condition={true} /> */}
      {/* <LogicalAndOperator condition={'true'} /> */}
      {/* <LogicalOrOperator condition /> */}
      {/* <SwitchStatement value={'option3'} /> */}
      <Exercise1 />
    </View>
  );
};

export default App;
