/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const Layout02 = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
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
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                flex: 1,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 16,
                  color: '#000000',
                  marginHorizontal: 20,
                }}>
                Tôi tên là Kỳ!
              </Text>
            </View>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 16,
                  color: '#000000',
                  marginHorizontal: 20,
                }}>
                Tôi năm nay 25 tuổi!
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View
            style={{
              flex: 2,
              borderWidth: 1,
              borderColor: 'black',
            }}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, backgroundColor: '#5C61F4'}} />
              <View style={{flex: 1}} />
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 16,
                  color: '#000000',
                }}>
                Dòng chữ này nằm ở giữa
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: 'black',
            }}>
            <View style={{flex: 1}} />
            <View style={{flex: 1, backgroundColor: '#4CAF50'}} />
          </View>
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View View style={{flex: 1, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#223263',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white'}}>Text 1</Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#9098B1',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Text 2</Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#FF3D00',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Text 3</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#4092FF',
              height: 200,
              width: 200,
              borderRadius: 20,
              marginTop: 20,
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
        <View
          style={{
            width: '100%',
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 65,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: '#D9D9D9',
              paddingVertical: 8,
              paddingHorizontal: 16,
              width: '45%',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              height: 45,
            }}>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
              Save
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: '#D9D9D9',
              paddingVertical: 8,
              paddingHorizontal: 16,
              width: '45%',
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              height: 45,
            }}>
            <Text style={{color: 'black', fontWeight: '500', fontSize: 16}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Layout02;

const styles = StyleSheet.create({
  container: {},
  topArea: {},
  bottomArea: {},
  buttonCancel: {},
  buttonConfirm: {},
});
