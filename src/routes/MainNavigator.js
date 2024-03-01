import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// import screens
import AppSplash from '../screens/AppSplash';
import {ROUTES} from '~constants/routes';
import OnboardingScreen from '~screens/Onboarding';
import LoginScreen from '~screens/Login';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={ROUTES.APP_SPASH}>
      <>
        <Stack.Screen name={ROUTES.APP_SPASH} component={AppSplash} />
        <Stack.Screen name={ROUTES.ONBOARDING} component={OnboardingScreen} />
        <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} /> */}
      </>
    </Stack.Navigator>
  );
}

export default MainNavigator;
