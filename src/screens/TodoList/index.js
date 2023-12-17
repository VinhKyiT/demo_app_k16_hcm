import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  AppState,
} from 'react-native';
import React, {useCallback, useState, useReducer, useEffect, useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoItem from '../../components/TodoItem';
import {ICONS} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {initialTodoState, todoReducer} from './todoReducer';
import {HANDLE_ITEM_CHECKBOX_PRESS, REINIT_TODO_STATE, SET_TODO_LIST} from './todoActions';
import LocalStorage from '../../helpers/storage';
const TodoListScreen = () => {
  const [todo, setTodo] = useState('');
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const navigation = useNavigation();

  console.log('todoState', todoState);

  const handleAddItem = useCallback(() => {
    // setTodoList(prev => [...prev, {id: uuidv4(), title: todo, status: 'todo'}]);
    dispatch({
      type: SET_TODO_LIST,
      payload: {id: uuidv4(), title: todo, status: 'todo'},
    });
    setTodo('');
    Keyboard.dismiss();
  }, [todo]);

  const handleItemPress = item => {
    navigation.navigate('TaskDetail', {item});
  };

  const handleItemCheckboxPress = useCallback(itemId => {
    // const newTodo = todoList.find(element => element.id === itemId);
    // if (newTodo) {
    //   setTaskDoneList(prev => [...prev, {...newTodo, status: 'done'}]);
    //   setTodoList(prev => prev.filter(item => item.id !== itemId));
    // }
    dispatch({type: HANDLE_ITEM_CHECKBOX_PRESS, payload: itemId});
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const handleAppStateChange = useCallback(async () => {
    if (appStateVisible.match(/inactive|background/)) {
      // Lưu dữ liệu
      await LocalStorage.storeData('TODO_LIST_DATA', todoState);
    }
  }, [appStateVisible, todoState]);

  useEffect(() => {
    handleAppStateChange();
  }, [handleAppStateChange]);

  useEffect(() => {
    (async () => {
      const storedData = await LocalStorage.getData('TODO_LIST_DATA');
      console.log('storedData', storedData);
      if (storedData) {
        dispatch({type: REINIT_TODO_STATE, payload: JSON.parse(storedData)});
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.listWrapper}>
        <View>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          {todoState.todoList.map(item => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                onCheckboxPress={handleItemCheckboxPress}
                onItemPress={handleItemPress}
              />
            );
          })}
        </View>
        <View>
          <Text style={styles.sectionTitle}>Tasks Done</Text>
          {todoState.taskDoneList.map(item => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                onCheckboxPress={handleItemCheckboxPress}
                onItemPress={handleItemPress}
              />
            );
          })}
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          value={todo}
          onChangeText={setTodo}
          placeholder="Write a task"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddItem}>
          <Image source={ICONS.IC_ADD} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listWrapper: {
    marginTop: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  buttonImage: {
    width: 25,
    height: 25,
  },
  textInput: {
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginTop: 24,
    marginBottom: 16,
  },
});
