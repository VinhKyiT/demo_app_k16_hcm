import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import AppText from '~components/AppText';
import {COLORS} from '~constants/colors';
import {DIMENSIONS} from '~constants/dimensions';
import {FONTS} from '~constants/fonts';

const UserCard = ({userInfo}) => {
  const {fullName, email, phoneNumber, avatar, address} = userInfo;
  return (
    <View style={styles.container}>
      <View>
        <FastImage source={{uri: avatar}} style={styles.avatar} />
      </View>
      <View style={styles.infoWrapper}>
        <AppText font={FONTS.TEXT.SEMIBOLD} size={18}>
          {fullName}
        </AppText>
        <AppText color={COLORS.TEXT_GRAY}>{email}</AppText>
        <View style={styles.divider} />
        <AppText color={COLORS.TEXT_GRAY}>{phoneNumber}</AppText>
        <View style={styles.divider} />
        <AppText color={COLORS.TEXT_GRAY}>{address}</AppText>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    padding: 16,
    flexDirection: 'row',
    borderRadius: 20,
  },
  avatar: {
    width: 90,
    height: 100,
    marginRight: 16,
    borderRadius: 12,
  },
  infoWrapper: {
    width: DIMENSIONS.SCREEN_WIDTH - 170,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.TEXT_GRAY,
  },
});
