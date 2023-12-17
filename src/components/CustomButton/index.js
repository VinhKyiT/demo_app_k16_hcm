import {TouchableOpacity, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useMemo} from 'react';

const CustomButton = ({title, onPress, containerStyle, titleStyle, isLoading}) => {
  const componentContainerStyle = useMemo(() => {
    const defaultStyle = styles.container;
    return {
      ...defaultStyle,
      ...containerStyle,
    };
  }, [containerStyle]);
  return (
    <TouchableOpacity onPress={onPress} style={componentContainerStyle}>
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
