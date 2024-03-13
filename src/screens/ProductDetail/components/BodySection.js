import {View} from 'react-native';
import React from 'react';
import AppText from '~components/AppText';
import {FONTS} from '~constants/fonts';
import {COLORS} from '~constants/colors';

const BodySection = ({title = '', description = '', containerStyle}) => {
  return (
    <View style={containerStyle && containerStyle}>
      <AppText font={FONTS.ROUNDED.SEMIBOLD} size={16}>
        {title}
      </AppText>
      <AppText font={FONTS.TEXT.REGULAR} color={COLORS.TEXT_GRAY}>
        {description}
      </AppText>
    </View>
  );
};

export default BodySection;
