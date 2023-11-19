import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const fullNameFromParams = route.params;
  console.log('fullNameFromParams', fullNameFromParams);

  useEffect(() => {
    console.log('Màn hình detail được mount');
    return () => {
      console.log('Màn hình detail bị unmount');
    };
  }, []);

  return (
    <View>
      <Text style={styles.text}>Detail Screen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Quay về Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Detail', {})}>
        <Text style={styles.text}>Push Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.popToTop()}>
        <Text style={styles.text}>Pop to top</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.pop(2)}>
        <Text style={styles.text}>Pop 2 screens</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log(navigation.canGoBack());
        }}>
        <Text style={styles.text}>Can go back?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.reset({index: 0, routes: [{name: 'Home'}]});
        }}>
        <Text style={styles.text}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20,
  },
});
