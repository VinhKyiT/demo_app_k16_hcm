import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Feather from 'react-native-vector-icons/Feather';
import {IMAGES} from '~assets/images';
import NavigationServices from '../utils/NavigationServices';
const FastImageDemo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const onLoadStart = () => {
    setIsLoading(true);
    setErrorMessage(null);
  };
  const onLoadEnd = () => {
    setIsLoading(false);
  };

  const onError = () => {
    setErrorMessage('Lỗi tải ảnh!');
  };

  useEffect(() => {
    console.log('render fastimage demo');
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity onPress={NavigationServices.openDrawer}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '500',
            textAlign: 'center',
            marginVertical: 8,
          }}>
          Fast Image Demo
        </Text>
        <View style={{width: 24, height: 24}} />
      </View>
      <View
        style={{
          width: 300,
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 16,
          backgroundColor: errorMessage ? 'gray' : 'transparent',
        }}>
        <FastImage
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onError={onError}
          style={styles.imageContainer}
          // onProgress={({nativeEvent}) => {
          //   console.log(nativeEvent);
          // }}
          source={{
            uri: 'https://picsum.photos/640/640?r=6007',
          }}
          resizeMode={FastImage.resizeMode.center}
          defaultSource={IMAGES.IMG_DEFAULT}
          // tintColor={'rgba(255,0,255,1)'}
        />
        {isLoading && <ActivityIndicator style={styles.loaderStyle} size={'large'} />}
        {!!errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
      </View>
    </View>
  );
};

export default FastImageDemo;

const styles = StyleSheet.create({
  imageContainer: {
    width: 300,
    height: 150,
  },
  loaderStyle: {
    color: 'green',
    position: 'absolute',
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    position: 'absolute',
  },
});
