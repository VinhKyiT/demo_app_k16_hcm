import React, {useState} from 'react';
import {View, Text} from 'react-native';

function IfElse({condition}) {
  if (condition) {
    return (
      <Text style={{color: 'black', fontSize: 30}}>
        This is rendered when condition is true.
      </Text>
    );
  }
  return (
    <Text style={{color: 'black', fontSize: 30}}>
      This is rendered when condition is false.
    </Text>
  );
}

export default IfElse;
