import {View, Text, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';

const DarkModeScreen = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const handleValueChange = value => {
    setIsDarkModeOn(value);
  };

  return (
    <View style={[styles.container, isDarkModeOn && styles.containerDark]}>
      <Text style={[styles.text, isDarkModeOn && styles.textDark]}>
        DarkModeScreen
      </Text>
      <Switch
        style={styles.switch}
        value={isDarkModeOn}
        onValueChange={handleValueChange}
      />
    </View>
  );
};

export default DarkModeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#000',
    fontSize: 24,
  },
  switch: {
    alignSelf: 'center',
    marginTop: 16,
  },
  containerDark: {
    backgroundColor: '#333',
  },
  textDark: {
    color: '#fff',
  },
});
