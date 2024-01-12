import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Feather from 'react-native-vector-icons/Feather';
import {IMAGES} from '~assets/images';
import NavigationServices from '../utils/NavigationServices';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AnimatedFastImage = Animated.createAnimatedComponent(FastImage);

const FastImageDemo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const aniValue = useRef(new Animated.Value(0)).current;

  const onPlayButtonPress = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      Animated.loop(
        Animated.timing(aniValue, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
      ).start();
    } else {
    }
  };
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
        <AnimatedFastImage
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          onError={onError}
          style={[
            styles.imageContainer,
            {
              transform: [
                {
                  rotate: aniValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            },
          ]}
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

        <TouchableOpacity onPress={onPlayButtonPress}>
          <AntDesign name="caretright" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FastImageDemo;

const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 999,
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
