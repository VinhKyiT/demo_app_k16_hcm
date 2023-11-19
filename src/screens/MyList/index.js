import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyListScreen = () => {
  const data = [
    {
      id: 'c9040678-81c9-5c2b-a6f0-613680f20633',
      name: 'Susan Welch',
    },
    {
      id: '06e9ea5a-bd1c-5378-9bea-3f56426f373c',
      name: 'Mildred Knight',
    },
    {
      id: '8f5275ca-19bb-580d-841c-bfceb832f48c',
      name: 'Virginia Austin',
    },
    {
      id: '10a243d5-5d14-5c8b-8ab5-b5fa48ee4f36',
      name: 'Lillian Gregory',
    },
  ];
  return (
    <View style={styles.container}>
      {data.map(item => (
        <View key={item.id}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default MyListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: '#000',
    fontSize: 20,
  },
});
