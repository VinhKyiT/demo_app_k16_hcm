import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const TaskDetailScreen = () => {
  const route = useRoute();
  const {
    params: {item},
  } = route;

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Task Detail</Text>
      <View style={styles.bodyWrapper}>
        <Text style={styles.bodyText}>
          Task: <Text style={{color: '#1B91FF'}}>{item?.title}</Text>
        </Text>
        <Text style={styles.bodyText}>
          Task:{' '}
          <Text style={{color: item?.status === 'todo' ? 'orange' : '#18D714'}}>
            {item?.status}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default TaskDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 36,
    color: '#000',
  },
  bodyText: {
    fontWeight: '500',
    fontSize: 30,
    color: '#000',
  },
  bodyWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
});
