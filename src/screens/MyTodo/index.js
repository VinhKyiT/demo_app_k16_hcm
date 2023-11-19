import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const MyTodoScreen = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddItem = useCallback(() => {
    setTodos(prev => [...prev, {title: todo, id: uuidv4()}]);
    setTodo('');
  }, [todo]);

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>My Todo List</Text>
      {/* Logo */}
      <Image
        source={{
          uri: 'https://www.shareicon.net/data/256x256/2016/08/01/640324_logo_512x512.png',
        }}
        style={styles.image}
      />
      <View>
        {/* Todo list */}
        {todos.map(item => {
          return (
            <Text key={item.id} style={styles.item}>
              {item.title}
            </Text>
          );
        })}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          value={todo}
          onChangeText={setTodo}
          placeholder="Input todo"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddItem}>
          <Text style={styles.buttonTitle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyTodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
    marginVertical: 16,
  },
  image: {
    width: 128,
    height: 128,
    alignSelf: 'center',
  },
  item: {
    fontSize: 16,
    color: '#000',
  },
  inputWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    width: '100%',
    height: 70,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 99,
  },
  buttonTitle: {
    color: 'white',
    fontWeight: '500',
    fontSize: 30,
    textAlignVertical: 'center',
  },
  textInput: {
    flexGrow: 1,
  },
});
