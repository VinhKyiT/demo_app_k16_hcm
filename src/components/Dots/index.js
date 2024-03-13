import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '~constants/colors';

const Dots = ({length, currentIndex}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      {typeof length === 'number' && length > 0
        ? Array(length)
            .fill(0)
            .map((_, index) => {
              return (
                <View
                  key={'DOT' + index.toString()}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginHorizontal: 4,
                    backgroundColor:
                      currentIndex === index ? COLORS.APP_ORANGE : COLORS.DOT_INACTIVE,
                  }}
                />
              );
            })
        : null}
    </View>
  );
};

export default Dots;
