import {View, Text, Animated, Easing, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';

const AnimatedDemoScreen = () => {
  const aniValue = useRef(new Animated.Value(0)).current;
  const aniValue2 = useRef(new Animated.Value(0)).current;
  const aniValue3 = useRef(new Animated.Value(0)).current;

  function moveToRandomPosition3() {
    Animated.timing(aniValue3, {
      toValue: 1.5,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }

  function moveToRandomPosition2() {
    Animated.spring(aniValue2, {
      toValue: Math.floor(Math.random() * 300),
      speed: 30,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
  }

  function moveToRandomPosition() {
    Animated.timing(aniValue, {
      toValue: Math.floor(Math.random() * 300), // random 1 số lớn hơn 0 và bé hơn 300
      duration: 2000, //Thời gian thực thi
      // delay: 2000, // Thời gian delay trước khi thực thi
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  function moveToRandomPosition4() {
    Animated.sequence([
      Animated.timing(aniValue, {
        toValue: 200,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(aniValue2, {
        toValue: 200,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function moveToRandomPosition5() {
    Animated.parallel([
      Animated.timing(aniValue, {
        toValue: 200,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(aniValue2, {
        toValue: 200,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function moveToRandomPosition6() {
    Animated.stagger(1000, [
      Animated.timing(aniValue, {
        toValue: 200,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(aniValue2, {
        toValue: 200,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  }

  return (
    <View>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'red',
          transform: [
            {
              translateX: aniValue,
            },
          ],
        }}
      />
      <TouchableOpacity onPress={moveToRandomPosition} style={{paddingTop: 16}}>
        <Text>Move to random position</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'red',
          transform: [
            {
              translateX: aniValue2,
            },
          ],
        }}
      />
      <TouchableOpacity onPress={moveToRandomPosition2} style={{paddingTop: 16}}>
        <Text>Move to random position have bounce</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'red',
          transform: [
            {
              translateX: aniValue3.interpolate({
                inputRange: [0, 0.2, 0.8, 1],
                outputRange: [0, 150, 100, 200],
                extrapolate: 'clamp',
              }),
            },
            {
              scale: aniValue3.interpolate({
                inputRange: [0, 0.2, 0.8, 1],
                outputRange: [1, 0.6, 1.5, 1],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      />
      <TouchableOpacity onPress={moveToRandomPosition3} style={{paddingTop: 16}}>
        <Text>Move to random position but with interpolation</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={moveToRandomPosition4} style={{paddingTop: 16}}>
        <Text>Move to specified position with composing (Animated.sequence)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={moveToRandomPosition5} style={{paddingTop: 16}}>
        <Text>Move to specified position with composing (Animated.parallel)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={moveToRandomPosition6} style={{paddingTop: 16}}>
        <Text>Move to specified position with composing (Animated.stagger)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedDemoScreen;
