import {createStackNavigator} from '@react-navigation/stack';
import React, {useCallback, useEffect} from 'react';
// import screens
import DetailScreen from '~screens/Detail';
import HomeScreen from '~screens/Home';
import MyListScreen from '~screens/MyList';
import MyTodoScreen from '~screens/MyTodo';
import TodoListScreen from '~screens/TodoList';
import TaskDetailScreen from '~screens/TaskDetail';
import FlatListDemo from '~examples/FlatListDemo';
import SectionListDemo from '~examples/SectionListDemo';
import FlatListUser from '../examples/exercise/btvn_22';
import DemoEventEmitter from '../examples/DemoEventEmitter';
import DebouncingScreen from '../examples/Debouncing';
import ThrottlingScreen from '../examples/Throttling';
import UseReducerDemo from '../examples/UseReducerDemo';
import ParentComponent from '~examples/ContextDemo/ParentComponent';
import Counter from '~screens/Counter';
import LoginScreen from '~screens/Login';
import useAuth from '~hooks/useAuth';
import CartScreen from '~screens/Cart';
import RegisterScreen from '~screens/Register';
import AsyncStorageDemo from '../examples/AsyncStorageDemo';
import LocalStorage from '../helpers/storage';

const Stack = createStackNavigator();

function MainNavigator() {
  const {isLoggedIn, setLogin} = useAuth();
  const retrieveLoggedInData = useCallback(async () => {
    const data = await LocalStorage.getData('ACCESS_TOKEN');
    if (data) {
      setLogin(true);
    }
  }, [setLogin]);
  useEffect(() => {
    retrieveLoggedInData();
  }, [retrieveLoggedInData]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLoggedIn ? (
        <>
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
        </>
      ) : (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

export default MainNavigator;
