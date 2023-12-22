import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {IMAGES} from '~assets/images';
import CustomButton from '~components/CustomButton';

const FastImageDemo = ({navigation}) => {
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
      <CustomButton
        title={'Open Drawer'}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
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
