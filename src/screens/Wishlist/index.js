import React, {useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';

const WishlistScreen = () => {
  // B1. Tao Animated Value
  // const aniValue = useRef(new Animated.Value(0)).current;
  const aniValue = useSharedValue(0);

  // B2. Ham de thay doi gia tri cua Animated Value
  // function moveToRandomPosition() {
  //   Animated.spring(aniValue, {
  //     toValue: Math.floor(Math.random() * 300),
  //     speed: 30,
  //     bounciness: 20,
  //     useNativeDriver: true,
  //   }).start();
  // }

  const moveToRandomPosition = () => {
    aniValue.value = withSpring(Math.floor(Math.random() * 300), {
      damping: 5,
      mass: 1,
      stiffness: 50,
    });
  };

  // B3. Tao animation style bang hook useAnimatedStyle
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: aniValue.value,
        },
      ],
    };
  });

  return (
    <View style={{margin: 16}}>
      {/* B4. Su dung animation style cho animatable component */}
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'red',
          },
          rStyle,
        ]}
      />
      <TouchableOpacity onPress={moveToRandomPosition} style={{paddingTop: 16}}>
        <Text>Move to random position have bounce</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WishlistScreen;
