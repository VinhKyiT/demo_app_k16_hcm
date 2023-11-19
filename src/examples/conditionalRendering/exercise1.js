import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Exercise1 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const CustomButton = ({title, onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: 'skyblue',
        }}>
        <Text style={{color: 'white', fontSize: 16}}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      {isLoggedIn ? (
        <>
          <View>
            <Text style={{color: 'black', fontSize: 20}}>Bui Pham Vinh Ky</Text>
            <Text style={{color: 'black', fontSize: 20}}>
              kybuidev@gmail.com
            </Text>
            <CustomButton title={'Logout'} onPress={handleLogout} />
          </View>
        </>
      ) : (
        <>
          <View>
            <Text style={{color: 'black', fontSize: 20}}>
              Vui lòng đăng nhập
            </Text>
            <CustomButton title={'Login'} onPress={handleLogin} />
          </View>
        </>
      )}
    </View>
  );
};

export default Exercise1;
