import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// import screens
import AppSplash from '../screens/AppSplash';
import {ROUTES} from '~constants/routes';
import OnboardingScreen from '~screens/Onboarding';
import LoginScreen from '~screens/Login';
import DrawerNavigator from './DrawerNavigator';
import CartScreen from '../screens/Cart';
import SearchScreen from '../screens/Search';
import ProductDetailScreen from '~screens/ProductDetail';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={ROUTES.APP_SPASH}>
      <>
        <Stack.Screen name={ROUTES.APP_SPASH} component={AppSplash} />
        <Stack.Screen name={ROUTES.ONBOARDING} component={OnboardingScreen} />
        <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
        <Stack.Screen name={ROUTES.DRAWER} component={DrawerNavigator} />
        <Stack.Screen name={ROUTES.CART} component={CartScreen} />
        <Stack.Screen name={ROUTES.SEARCH} component={SearchScreen} />
        <Stack.Screen name={ROUTES.PRODUCT_DETAIL} component={ProductDetailScreen} />
      </>
    </Stack.Navigator>
  );
}

export default MainNavigator;
