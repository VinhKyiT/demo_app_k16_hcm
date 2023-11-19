import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// import screens
import DetailScreen from '../screens/Detail';
import HomeScreen from '../screens/Home';
import MyListScreen from '../screens/MyList';
import MyTodoScreen from '../screens/MyTodo';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="MyTodo">
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
    </Stack.Navigator>
  );
}

export default MainNavigator;
