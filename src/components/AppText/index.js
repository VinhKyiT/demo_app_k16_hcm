import React, {useMemo} from 'react';
import {Text} from 'react-native';
import {FONTS} from '../../constants/fonts';

const AppText = ({children, ...props}) => {
  const defaultStyle = useMemo(
    () => ({
      fontFamily: FONTS.REGULAR,
      color: 'black',
    }),
    [],
  );
  return (
    <Text style={defaultStyle} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
