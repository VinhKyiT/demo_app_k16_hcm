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
import LocalStorage from '../helpers/storage';
import NavigationServices from '../utils/NavigationServices';
import {ROUTES} from '../constants/routes';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/auth/actions';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
      <DrawerItemList {...props} />
      <View style={{width: '100%', height: 1, backgroundColor: 'rgba(128, 128, 128, 0.3)'}} />
      <DrawerItem
        label={'Logout'}
        icon={({color, size}) => <MaterialCommunityIcons name="logout" color={color} size={size} />}
        onPress={async () => {
          navigation.closeDrawer();
          await LocalStorage.removeData('IS_LOGGED_IN');
          NavigationServices.reset({routes: [{name: ROUTES.LOGIN}], index: 0});
          dispatch(logout());
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
