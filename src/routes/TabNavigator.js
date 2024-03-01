import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '~constants/colors';
import {ROUTES} from '~constants/routes';
import HistoryScreen from '~screens/History';
import HomeScreen from '~screens/Home';
import MyProfileScreen from '~screens/MyProfile';
import WishlistScreen from '~screens/Wishlist';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.APP_ORANGE,
        headerShown: false,
      }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcons name="image-size-select-actual" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.WISHLIST}
        component={WishlistScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcons name="image-size-select-actual" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.MY_PROFILE}
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcons name="image-size-select-actual" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.HISTORY}
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcons name="image-size-select-actual" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
