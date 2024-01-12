import React, {useRef} from 'react';
import {Animated, PanResponder, View} from 'react-native';

const PanResponders = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: 'red',
          },
          pan.getLayout(),
        ]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

export default PanResponders;
