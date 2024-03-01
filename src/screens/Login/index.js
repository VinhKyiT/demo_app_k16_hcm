import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {IMAGES} from '~assets/images';
import AppInput from '~components/AppInput';
import AppText from '~components/AppText';
import {COLORS} from '~constants/colors';
import {FONTS} from '~constants/fonts';
import AppButton from '~components/AppButton';
import NavigationServices from '~utils/NavigationServices';
import {ROUTES} from '~constants/routes';
import LocalStorage from '~helpers/storage';

const LoginScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (email === 'admin@gmail.com' && password === '123123') {
        NavigationServices.navigate(ROUTES.DRAWER);
        LocalStorage.storeData('IS_LOGGED_IN', 'true');
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <View>
          <FastImage
            source={IMAGES.MINI_LOGO}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.loginImage}
          />
        </View>
        <View style={styles.tabSelector}>
          <TouchableOpacity
            style={styles.tabLabelContainer}
            onPress={() => {
              setActiveTab(0);
            }}>
            <AppText>Login</AppText>
            {activeTab === 0 && <View style={styles.activeTabLine} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabLabelContainer}
            onPress={() => {
              setActiveTab(1);
            }}>
            <AppText>Sign-up</AppText>
            {activeTab === 1 && <View style={styles.activeTabLine} />}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomPart}>
        <View style={styles.inputWrapper}>
          <AppInput onChangeText={setEmail} value={email} title={'Email address'} hasBottomLine />
          <AppInput
            onChangeText={setPassword}
            value={password}
            title={'Pasword'}
            hasBottomLine
            containerStyle={styles.inputContainer}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.forgotStyle}>
          <AppText size={16} color={COLORS.APP_ORANGE} font={FONTS.TEXT.SEMIBOLD}>
            Forgot passcode?
          </AppText>
        </TouchableOpacity>
      </View>
      <View style={styles.loginButtonContainer}>
        <AppButton
          isLoading={isLoading}
          onPress={handleLogin}
          title={'Login'}
          containerStyle={styles.loginButton}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
