import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICONS} from '../../assets/icons';

const TodoItem = ({item, onCheckboxPress, onItemPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.touchableContainer}
        onPress={() => onItemPress(item)}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.touchableCheckbox}
          onPress={() => onCheckboxPress(item?.id)}>
          {item?.status === 'done' ? <Image source={ICONS.IC_CHECK} /> : null}
        </TouchableOpacity>
        <Text
          style={[
            styles.title,
            item?.status === 'done' && {textDecorationLine: 'line-through'},
          ]}>
          {item?.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  touchableContainer: {
    flexDirection: 'row',
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  touchableCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#55BCF666',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
  },
});
