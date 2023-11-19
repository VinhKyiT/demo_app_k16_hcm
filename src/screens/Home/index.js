import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';

const HomeScreen = ({}) => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  console.log('isFocused', isFocused);

  useEffect(() => {
    console.log('Màn hình home được mount');
    return () => {
      console.log('Màn hình home bị unmount');
    };
  }, []);

  useFocusEffect(() => {
    console.log('Màn hình home được focus');
  });

  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {fullName: 'Vinh Ky', age: 20})
        }>
        <Text style={styles.text}>Đi tới Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log(navigation.canGoBack());
        }}>
        <Text style={styles.text}>Can go back?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20,
  },
});
