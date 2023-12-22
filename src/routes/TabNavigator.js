import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImageDemo from '~examples/FastImageDemo';
import FlatListDemo from '~examples/FlatListDemo';
import TodoListScreen from '~screens/TodoList';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarActiveTintColor: 'green',
        // tabBarInactiveTintColor: 'red',
        // tabBarActiveBackgroundColor: 'red',
        // tabBarStyle: {
        //   backgroundColor: 'red',
        // },
        // lazy: false,
        headerShown: false,
      }}>
      {/* <Tab.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      <Tab.Screen
        name="FastImageDemo"
        component={FastImageDemo}
        options={{
          tabBarLabel: 'Fast Image',

          tabBarIcon: ({color, size}) => {
            return (
              <MaterialCommunityIcons name="image-size-select-actual" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="TodoListScreen"
        component={TodoListScreen}
        options={{
          tabBarLabel: 'Todo List',

          tabBarIcon: ({color, size}) => {
            return <MaterialCommunityIcons name="list-status" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="FlatListDemo"
        component={FlatListDemo}
        options={{
          tabBarLabel: 'FlatList',
          tabBarIcon: ({color, size}) => {
            return <MaterialCommunityIcons name="format-list-bulleted" size={size} color={color} />;
          },
          // tabBarBadge: 'new',
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
