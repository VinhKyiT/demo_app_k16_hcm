import React, {useMemo} from 'react';
import {Text} from 'react-native';
import {FONTS} from '../../constants/fonts';
import {COLORS} from '~constants/colors';

const AppText = ({children, size, color, font, align, style, ...props}) => {
  const resultStyle = useMemo(() => {
    let finalStyle = {};
    const fontFamily = font ? font : FONTS.TEXT.REGULAR;
    const fontColor = color ? color : COLORS.BLACK;
    const fontSize = typeof size === 'number' ? size : 14;
    const textAlign = typeof align === 'string' ? align : 'left';
    finalStyle = {
      fontFamily,
      color: fontColor,
      fontSize,
      textAlign,
    };
    return finalStyle;
  }, [color, font, size, align]);
  return (
    <Text style={[resultStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
