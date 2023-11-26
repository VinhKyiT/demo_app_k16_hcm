import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import TodoItem from '../../components/TodoItem';
import {ICONS} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
const TodoListScreen = () => {
  const [todoList, setTodoList] = useState([]);
  const [taskDoneList, setTaskDoneList] = useState([]);
  const [todo, setTodo] = useState('');

  const navigation = useNavigation();

  const handleAddItem = useCallback(() => {
    setTodoList(prev => [...prev, {id: uuidv4(), title: todo, status: 'todo'}]);
    setTodo('');
    Keyboard.dismiss();
  }, [todo]);

  const handleItemPress = item => {
    navigation.navigate('TaskDetail', {item});
  };

  const handleItemCheckboxPress = useCallback(
    itemId => {
      const newTodo = todoList.find(element => element.id === itemId);
      if (newTodo) {
        setTaskDoneList(prev => [...prev, {...newTodo, status: 'done'}]);
        setTodoList(prev => prev.filter(item => item.id !== itemId));
      }
    },
    [todoList],
  );

  return (
    <View style={styles.container}>
      <View style={styles.listWrapper}>
        <View>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          {todoList.map(item => {
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
          {taskDoneList.map(item => {
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
