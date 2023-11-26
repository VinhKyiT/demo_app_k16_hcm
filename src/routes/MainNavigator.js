import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// import screens
import DetailScreen from '~screens/Detail';
import HomeScreen from '~screens/Home';
import MyListScreen from '~screens/MyList';
import MyTodoScreen from '~screens/MyTodo';
import TodoListScreen from '~screens/TodoList';
import TaskDetailScreen from '~screens/TaskDetail';
import FlatListDemo from '~examples/FlatListDemo';
import SectionListDemo from '~examples/SectionListDemo';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="FlatListDemo">
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
      <Stack.Screen name="TodoList" component={TodoListScreen} />
      <Stack.Screen name="TaskDetail" component={TaskDetailScreen} />
      <Stack.Screen name="FlatListDemo" component={FlatListDemo} />
      <Stack.Screen name="SectionListDemo" component={SectionListDemo} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
