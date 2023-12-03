import React, {useEffect, useState} from 'react';
import {DeviceEventEmitter, Text, View} from 'react-native';

const ReceiverComponent = () => {
  const [receivedData, setReceivedData] = useState('');

  useEffect(() => {
    const eventListener = DeviceEventEmitter.addListener(
      'customEvent',
      handleCustomEvent,
    );

    return () => {
      eventListener.remove();
    };
  }, []);

  const handleCustomEvent = data => {
    setReceivedData(data.greet);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffd0'}}>
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          color: '#000',
          fontSize: 20,
        }}>
        Receiver Component
      </Text>
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
          color: '#000',
          fontSize: 20,
        }}>
        Received Data: {receivedData}
      </Text>
    </View>
  );
};

export default ReceiverComponent;
