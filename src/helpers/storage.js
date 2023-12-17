import AsyncStorage from '@react-native-async-storage/async-storage';

// Lưu dữ liệu vào AsyncStorage
const storeData = async (key, value) => {
  try {
    if (typeof value === 'string') {
      await AsyncStorage.setItem(key, value);
    } else {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.log('Store Data Error:', error);
  }
};

// Lấy dữ liệu từ AsyncStroage
const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    } else {
      console.log('Data not found for key ' + key);
    }
  } catch (error) {
    console.log(`Error retrieving data for key ${key}, ${error}`);
  }
};

const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Remove data error:', error);
  }
};

const LocalStorage = {
  storeData,
  getData,
  removeData,
};

export default LocalStorage;
