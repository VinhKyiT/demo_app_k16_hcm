import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import AppText from '~components/AppText';
import styles from './styles';
import {FONTS} from '~constants/fonts';
import UserCard from './component/UserCard';
import {COLORS} from '~constants/colors';
import {PROFILE_MENU} from '~constants/profileMenu';
import AppIcon from '~components/AppIcon';
import AppButton from '~components/AppButton';
import NavigationServices from '~utils/NavigationServices';
import {ROUTES} from '~constants/routes';

const MyProfileScreen = () => {
  return (
    <View style={styles.container}>
      <AppText font={FONTS.TEXT.SEMIBOLD} size={34}>
        My profile
      </AppText>
      <View style={styles.sectionTitle}>
        <AppText font={FONTS.TEXT.SEMIBOLD} size={18}>
          Personal details
        </AppText>
        <TouchableOpacity
          onPress={() => {
            NavigationServices.navigate(ROUTES.EDIT_PROFILE);
          }}>
          <AppText size={14} color={COLORS.APP_ORANGE}>
            Change
          </AppText>
        </TouchableOpacity>
      </View>
      <UserCard
        userInfo={{
          fullName: 'Marvis Ighedosa',
          email: 'Dosamarvis@gmail.com',
          phoneNumber: '+234 9011039271',
          avatar:
            'https://thanhnien.mediacdn.vn/Uploaded/caotung/2020_12_30/photo-1-16092554908561278237856_GFAT.jpg?width=500',
          address: 'No 15 uti street off ovie palace road effurun delta state',
        }}
      />
      {PROFILE_MENU.map(item => {
        return (
          <View key={item.id}>
            <View style={styles.menuItemDivider} />
            <TouchableOpacity style={styles.menuItemContainer} onPress={item?.onPress}>
              <AppText font={FONTS.TEXT.SEMIBOLD} size={18}>
                {item.title}
              </AppText>
              <AppIcon type="antdesign" name={'right'} />
            </TouchableOpacity>
          </View>
        );
      })}
      <View style={styles.buttonContainer}>
        <AppButton
          title={'Update'}
          onPress={() => {
            NavigationServices.navigate(ROUTES.EDIT_PROFILE);
          }}
        />
      </View>
    </View>
  );
};

export default MyProfileScreen;
