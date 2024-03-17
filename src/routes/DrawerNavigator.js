import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigator from './TabNavigator';
import DemoGestureHandler from '../screens/Reanimated';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const {navigation} = props;
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
      <DrawerItemList {...props} />
      <View style={{width: '100%', height: 1, backgroundColor: 'rgba(128, 128, 128, 0.3)'}} />
      <DrawerItem
        label={'Logout'}
        icon={({color, size}) => <MaterialCommunityIcons name="logout" color={color} size={size} />}
        onPress={() => {
          navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{drawerPosition: 'left', headerShown: false}}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home-circle" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="DemoGestureHandler"
        component={DemoGestureHandler}
        options={{
          drawerLabel: 'Gesture Handler',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home-circle" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
