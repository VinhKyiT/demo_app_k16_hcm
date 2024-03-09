import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import AppIcon from '../AppIcon';
import AppText from '../AppText';
import {FONTS} from '../../constants/fonts';

const AppHeader = ({leftIcon = {}, rightIcon = {}, centerTitle}) => {
  const {
    iconName: leftIconName,
    iconColor: leftIconColor,
    iconSize: leftIconSize,
    iconType: leftIconType,
    onIconPress: onLeftIconPress,
  } = leftIcon;
  const {
    iconName: rightIconName,
    iconColor: rightIconColor,
    iconSize: rightIconSize,
    iconType: rightIconType,
    onIconPress: onRightIconPress,
  } = rightIcon;
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onLeftIconPress} style={styles.iconContainer}>
        <AppIcon
          type={leftIconType}
          name={leftIconName}
          size={leftIconSize}
          color={leftIconColor}
        />
      </TouchableOpacity>
      <View style={styles.centerTitleContainer}>
        <AppText size={18} font={FONTS.TEXT.MEDIUM}>
          {centerTitle}
        </AppText>
      </View>
      <TouchableOpacity activeOpacity={0.8} onPress={onRightIconPress} style={styles.iconContainer}>
        <AppIcon
          type={rightIconType}
          name={rightIconName}
          size={rightIconSize}
          color={rightIconColor}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
