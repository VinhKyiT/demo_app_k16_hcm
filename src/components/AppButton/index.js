import {TouchableOpacity, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useMemo} from 'react';
import AppText from '~components/AppText';
import {COLORS} from '~constants/colors';
import {FONTS} from '~constants/fonts';

const AppButton = ({title, onPress, containerStyle, titleStyle, isLoading, disabled}) => {
  const componentContainerStyle = useMemo(() => {
    const defaultStyle = styles.container;
    return {
      ...defaultStyle,
      ...containerStyle,
    };
  }, [containerStyle]);
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      onPress={onPress}
      style={componentContainerStyle}>
      {isLoading ? (
        <ActivityIndicator size={30} />
      ) : (
        <AppText style={[styles.title, titleStyle && titleStyle]}>{title}</AppText>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.APP_ORANGE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 24,
  },
  title: {
    color: COLORS.WHITE,
    fontFamily: FONTS.TEXT.SEMIBOLD,
    fontSize: 16,
  },
});
