import {TouchableOpacity, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

const CustomButton = ({title, onPress, containerStyle, titleStyle, isLoading}) => {
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle ? containerStyle : styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={titleStyle ? titleStyle : styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ad531f',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff',
  },
});
