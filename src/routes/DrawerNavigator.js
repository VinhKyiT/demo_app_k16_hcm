import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import AsyncStorageDemo from '~examples/AsyncStorageDemo';
import ThrottlingScreen from '~examples/Throttling';
import TabNavigator from './TabNavigator';
import {Text, View} from 'react-native';
import useAuth from '~hooks/useAuth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => {
  const {navigation} = props;
  const {handleLogout, userInfo} = useAuth();
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
      <View style={{width: '100%', height: 160, backgroundColor: '#668EBD', padding: 16}}>
        <View style={{height: '100%', justifyContent: 'space-between'}}>
          {/* Avatar */}
          <FastImage
            source={{uri: userInfo?.avatar}}
            style={{width: 60, height: 60, borderRadius: 40}}
          />

          <View>
            {/* Ten */}
            <Text style={{color: 'white', fontWeight: '600'}}>{userInfo?.name}</Text>
            {/* Email */}
            <Text style={{color: '#9c9c9c'}}>{userInfo?.email}</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
      <View style={{width: '100%', height: 1, backgroundColor: 'rgba(128, 128, 128, 0.3)'}} />
      <DrawerItem
        label={'Logout'}
        icon={({color, size}) => <MaterialCommunityIcons name="logout" color={color} size={size} />}
        onPress={() => {
          navigation.closeDrawer();
          handleLogout();
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
          drawerLabel: 'Trang chủ',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home-circle" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="AsyncStorageDemo"
        component={AsyncStorageDemo}
        options={{
          drawerLabel: 'Async Storage',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="file-document" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="ThrottlingScreen"
        component={ThrottlingScreen}
        options={{
          drawerLabel: 'Throttling',
          drawerIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cursor-default-click" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
