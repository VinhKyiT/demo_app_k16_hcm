import React from 'react';
import {View, Text} from 'react-native';

function SwitchStatement({value}) {
  switch (value) {
    case 'option1':
      return (
        <Text style={{color: 'black', fontSize: 30}}>Render option 1.</Text>
      );
    case 'option2':
      return (
        <Text style={{color: 'black', fontSize: 30}}>Render option 2.</Text>
      );
    default:
      return (
        <Text style={{color: 'black', fontSize: 30}}>
          Render default option.
        </Text>
      );
  }
}

export default SwitchStatement;
