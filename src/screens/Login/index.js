import React, {useCallback, useState} from 'react';
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
import {useDispatch} from 'react-redux';
import {loginSuccess} from '../../redux/auth/actions';
import axios from 'axios';
import {showModal} from '../../components/AppModal';

const LoginScreen = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://store.kybuidev.com/api/v1/auth/login', {
        email: email,
        password: password,
      });
      console.log('response', response);
      if (response?.data?.access_token) {
        const userData = await axios.get('https://store.kybuidev.com/api/v1/auth/profile', {
          headers: {
            Authorization: `Bearer ${response?.data?.access_token}`,
          },
        });
        if (userData?.data) {
          const userDataValue = userData?.data;
          delete userDataValue?.password;
          setIsLoading(false);
          dispatch(
            loginSuccess({
              accessToken: response?.data?.access_token,
              refreshToken: response?.data?.refresh_token,
              userInfo: userDataValue,
            }),
          );
          NavigationServices.replace('DrawerNavigator');
        }
      }
    } catch (err) {
      console.log('err', err);
      if (err.response.data?.message === 'Unauthorized') {
        showModal({
          title: 'Unauthorized',
          content: 'Please check your email address or password!',
        });
        setIsLoading(false);
      }
    }
  }, [dispatch, email, password]);

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
            title={'Password'}
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
