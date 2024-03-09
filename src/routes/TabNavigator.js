import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {COLORS} from '~constants/colors';
import {ROUTES} from '~constants/routes';
import HistoryScreen from '~screens/History';
import HomeScreen from '~screens/Home';
import MyProfileScreen from '~screens/MyProfile';
import WishlistScreen from '~screens/Wishlist';
import AppIcon from '~components/AppIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.TAB_BAR_ACTIVE,
        tabBarInactiveTintColor: COLORS.TAB_BAR_INACTIVE,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.TRANSPARENT,
          elevation: 0,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <AppIcon
                type={focused ? 'entypo' : 'antdesign'}
                name={'home'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.WISHLIST}
        component={WishlistScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <AppIcon
                type="antdesign"
                name={focused ? 'heart' : 'hearto'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.MY_PROFILE}
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <AppIcon
                type="font-awesome"
                name={focused ? 'user' : 'user-o'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.HISTORY}
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <AppIcon
                type="material-community"
                name={focused ? 'clock' : 'clock-outline'}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
