import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const UselessTextInput = () => {
  const [text, setText] = useState('Useless Text');
  const [number, setNumber] = useState(null);

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Hay nhap ten cua ban"
        style={styles.input}
        onChangeText={txt => setText(txt)}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={txt => setNumber(txt)}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;
