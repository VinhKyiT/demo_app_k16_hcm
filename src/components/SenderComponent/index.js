import React from 'react';
import {DeviceEventEmitter, Text, TouchableOpacity, View} from 'react-native';

const SenderComponent = () => {
  const sendCustomEvent = () => {
    DeviceEventEmitter.emit('customEvent', {
      greet: 'Xin chào, tôi đến từ SenderComponent!',
    });
  };

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          color: '#000',
          fontSize: 20,
        }}>
        Sender Component
      </Text>
      <TouchableOpacity onPress={sendCustomEvent}>
        <Text
          style={{
            width: '100%',
            textAlign: 'center',
            color: '#000',
            fontSize: 20,
          }}>
          Send Event
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SenderComponent;
