import React from 'react';
import {TextInput, View} from 'react-native';
import AppText from '~components/AppText';
import {COLORS} from '~constants/colors';
import {FONTS} from '~constants/fonts';
import styles from './styles';

const AppInput = ({title, titleStyle, containerStyle, style, hasBottomLine, ...props}) => {
  return (
    <View style={[styles.container, containerStyle && containerStyle]}>
      {!!title && (
        <AppText
          color={COLORS.GRAY}
          size={15}
          font={FONTS.TEXT.SEMIBOLD}
          style={titleStyle ? titleStyle : {}}>
          {title}
        </AppText>
      )}
      <TextInput
        placeholder="Enter something"
        placeholderTextColor={COLORS.LIGHT_GRAY}
        style={[
          styles.inputStyle,
          style && style,
          hasBottomLine && {borderBottomColor: COLORS.BLACK, borderBottomWidth: 0.5},
        ]}
        {...props}
      />
    </View>
  );
};

export default AppInput;
