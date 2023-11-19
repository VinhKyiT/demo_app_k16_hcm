import React from 'react';
import {View, Text} from 'react-native';

function LogicalOrOperator({condition}) {
  return (
    <View>
      {condition || (
        <Text style={{color: 'black', fontSize: 30}}>
          This is rendered when condition is false.
        </Text>
      )}
    </View>
  );
}

export default LogicalOrOperator;
