import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// import screens
import ParentComponent from '~examples/ContextDemo/ParentComponent';
import FastImageDemo from '~examples/FastImageDemo';
import FlatListDemo from '~examples/FlatListDemo';
import SectionListDemo from '~examples/SectionListDemo';
import CartScreen from '~screens/Cart';
import Counter from '~screens/Counter';
import DetailScreen from '~screens/Detail';
import HomeScreen from '~screens/Home';
import LoginScreen from '~screens/Login';
import MyListScreen from '~screens/MyList';
import MyTodoScreen from '~screens/MyTodo';
import RegisterScreen from '~screens/Register';
import TaskDetailScreen from '~screens/TaskDetail';
import TodoListScreen from '~screens/TodoList';
import AsyncStorageDemo from '../examples/AsyncStorageDemo';
import DebouncingScreen from '../examples/Debouncing';
import DemoEventEmitter from '../examples/DemoEventEmitter';
import ThrottlingScreen from '../examples/Throttling';
import UseReducerDemo from '../examples/UseReducerDemo';
import FlatListUser from '../examples/exercise/btvn_22';
import AppSplash from '../screens/AppSplash';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="AppSplash">
      <>
        <Stack.Screen name="AppSplash" component={AppSplash} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        {/* <Stack.Screen name="TabNavigator" component={TabNavigator} /> */}
        <Stack.Screen name="FastImageDemo" component={FastImageDemo} />
        <Stack.Screen name="TodoList" component={TodoListScreen} />
        <Stack.Screen name="AsyncStorageDemo" component={AsyncStorageDemo} />
        <Stack.Screen name="FlatListDemo" component={FlatListDemo} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Trang chủ',
          }}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="MyList" component={MyListScreen} />
        <Stack.Screen name="MyTodo" component={MyTodoScreen} />
        <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
        <Stack.Screen name="FlatListUser" component={FlatListUser} />
        <Stack.Screen name="SectionListDemo" component={SectionListDemo} />
        <Stack.Screen name="DemoEventEmitter" component={DemoEventEmitter} />
        <Stack.Screen name="DebouncingScreen" component={DebouncingScreen} />
        <Stack.Screen name="ThrottlingScreen" component={ThrottlingScreen} />
        <Stack.Screen name="UseReducerDemo" component={UseReducerDemo} />
        <Stack.Screen name="ContextDemo" component={ParentComponent} />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </>
    </Stack.Navigator>
  );
}

export default MainNavigator;
