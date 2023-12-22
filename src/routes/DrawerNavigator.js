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
  const {handleLogout} = useAuth();
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
      <View style={{width: '100%', height: 100, backgroundColor: '#668EBD'}}>
        <View>
          {/* Avatar */}
          <FastImage />
          {/* Ten */}
          <Text style={{color: 'white'}}>Ten</Text>
        </View>
        {/* Email */}
        <Text style={{color: 'white'}}>Email</Text>
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
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="AsyncStorageDemo" component={AsyncStorageDemo} />
      <Drawer.Screen name="ThrottlingScreen" component={ThrottlingScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
