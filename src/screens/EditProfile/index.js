import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppHeader from '~components/AppHeader';
import {COLORS} from '~constants/colors';
import NavigationServices from '~utils/NavigationServices';
import styles from './styles';
import AppText from '~components/AppText';
import {FONTS} from '~constants/fonts';
import FastImage from 'react-native-fast-image';
import AppIcon from '~components/AppIcon';
import AppRadioGroup from '~components/AppRadioGroup';
import {EDIT_PROFILE_PAYMENT_METHODS} from '~constants/paymentMethods';
import AppButton from '~components/AppButton';
import LocalStorage from '~helpers/storage';

const EditProfileScreen = () => {
  const [selectingItem, setSelectingItem] = useState(EDIT_PROFILE_PAYMENT_METHODS[0].id);
  const updateProfile = () => {
    LocalStorage.storeData('DEFAULT_PAYMENT_METHOD', selectingItem);
  };

  const getPaymentMethod = async () => {
    return await LocalStorage.getData('DEFAULT_PAYMENT_METHOD');
  };
  useEffect(() => {
    getPaymentMethod()
      .then(res => {
        if (res) {
          setSelectingItem(res);
        }
      })
      .catch(e => console.log(e));
  }, []);
  return (
    <View style={styles.container}>
      <AppHeader
        leftIcon={{
          iconName: 'left',
          iconType: 'antdesign',
          iconColor: COLORS.BLACK,
          iconSize: 24,
          onIconPress: NavigationServices.goBack,
        }}
        centerTitle={'My profile'}
      />
      <View style={styles.pageContent}>
        <AppText font={FONTS.TEXT.SEMIBOLD} size={16}>
          Information
        </AppText>
        <View style={styles.userCard}>
          <FastImage
            source={{
              uri: 'https://thanhnien.mediacdn.vn/Uploaded/caotung/2020_12_30/photo-1-16092554908561278237856_GFAT.jpg?width=500',
            }}
            style={styles.avatar}
          />
          <View style={styles.infoWrapper}>
            <AppText font={FONTS.TEXT.SEMIBOLD} size={18}>
              {'Marvis Ighedosa'}
            </AppText>
            <AppText color={COLORS.TEXT_GRAY}>{'dosamarvis@gmail.com'}</AppText>
            <AppText color={COLORS.TEXT_GRAY}>
              {'No 15 uti street off ovie palace road effurun delta state'}
            </AppText>
            <TouchableOpacity
              style={styles.userCardEditIcon}
              hitSlop={{
                bottom: 10,
                top: 10,
                left: 10,
                right: 10,
              }}>
              <AppIcon type="octicon" name="pencil" />
            </TouchableOpacity>
          </View>
        </View>
        <AppText font={FONTS.TEXT.SEMIBOLD} size={16} style={{marginTop: 48}}>
          Payment Method
        </AppText>
        <View style={{marginTop: 8}}>
          <AppRadioGroup
            data={EDIT_PROFILE_PAYMENT_METHODS}
            selectingItem={selectingItem}
            onItemPress={id => setSelectingItem(id)}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title={'Update'} onPress={updateProfile} />
      </View>
    </View>
  );
};

export default EditProfileScreen;
