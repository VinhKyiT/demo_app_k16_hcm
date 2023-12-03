import React from 'react';
import {SafeAreaView} from 'react-native';
import SenderComponent from '../components/SenderComponent';
import ReceiverComponent from '../components/ReceiverComponent';

const DemoEventEmitter = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SenderComponent />
      <ReceiverComponent />
    </SafeAreaView>
  );
};

export default DemoEventEmitter;
