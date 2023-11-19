import React from 'react';
import {View, Text} from 'react-native';

function LogicalAndOperator({condition}) {
  return (
    <View>
      {!!condition && (
        <Text style={{color: 'black', fontSize: 30}}>
          This is rendered when condition is true.
        </Text>
      )}
    </View>
  );
}

export default LogicalAndOperator;
