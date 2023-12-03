import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import React, {memo} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const UserItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: item?.image}} style={styles.avatar} />
      </View>
      <View>
        <View style={styles.bodyItem}>
          <FontAwesome
            name="user"
            color={'#000'}
            size={24}
            style={styles.iconWrapper}
          />
          <Text style={styles.bodyItemText}>
            {item?.firstName + ' ' + item?.lastName}
          </Text>
        </View>
        <View style={styles.bodyItem}>
          <Feather
            name="mail"
            color={'#000'}
            size={24}
            style={styles.iconWrapper}
          />
          <Text style={styles.bodyItemText}>{item?.email}</Text>
        </View>
        <View style={styles.bodyItem}>
          <FontAwesome
            name="phone"
            color={'#000'}
            size={24}
            style={styles.iconWrapper}
          />
          <Text style={styles.bodyItemText}>{item?.phone}</Text>
        </View>
        <View style={styles.bodyItem}>
          <FontAwesome
            name="map-marker"
            color={'#000'}
            size={24}
            style={styles.iconWrapper}
          />
          <Text style={[styles.bodyItemText, {maxWidth: width - 198}]}>
            {item?.address?.address + ' ' + item?.address?.city}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default memo(UserItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  bodyItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyItemText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 8,
  },
  iconWrapper: {
    width: 26,
    height: 26,
    textAlign: 'center',
  },
});
