import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './style';
import AppIcon from '../AppIcon';
import AppText from '../AppText';
import {FONTS} from '../../constants/fonts';
import {COLORS} from '../../constants/colors';

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
    badge: rightIconBadge,
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
        {!!rightIconBadge && (
          <View
            style={{
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 99,
              width: 22,
              height: 22,
              position: 'absolute',
              top: -10,
              right: -10,
            }}>
            <AppText size={12} color={COLORS.WHITE}>
              {rightIconBadge}
            </AppText>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
