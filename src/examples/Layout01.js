/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Layout01 = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#FB7181',
                borderRadius: 15,
                width: 90,
                height: 90,
              }}
            />
          </View>
          <View
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: 'black',
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                color: '#000000',
                margin: 20,
              }}>
              Tôi tên là Kỳ!
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                color: '#000000',
              }}>
              Dòng chữ này nằm ở giữa
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: 'black',
            }}>
            <View style={{flex: 1, backgroundColor: '#5C61F4'}} />
            <View style={{flex: 1, backgroundColor: '#4CAF50'}} />
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, backgroundColor: '#223263'}} />
            <View style={{flex: 1, backgroundColor: '#9098B1'}} />
            <View style={{flex: 1, backgroundColor: '#FF3D00'}} />
          </View>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#4092FF',
            height: 200,
            width: 200,
            borderRadius: 20,
            marginTop: 50,
          }}>
          <View
            style={{
              backgroundColor: '#FB7181',
              height: 90,
              width: 90,
              borderRadius: 15,
              position: 'absolute',
              top: -45,
              right: -45,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Layout01;

const styles = StyleSheet.create({
  container: {},
  topArea: {},
  bottomArea: {},
  buttonCancel: {},
  buttonConfirm: {},
});
