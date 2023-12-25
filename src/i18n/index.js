import I18n from 'i18n-js';
import vi from './locales/vi.js';
import en from './locales/en.js';
import LocalStorage from '../helpers/storage.js';

// Ngôn ngữ mặc định
I18n.defaultLocale = 'en';

// Định nghĩa các ngôn ngữ được sử dụng trong ứng dụng
I18n.translations = {
  vi,
  en,
};

// Ngôn ngữ hiện tại
I18n.locale = 'en';

// Một hàm để cài đặt ngôn ngữ hiện tại
const setLocale = async locale => {
  console.log('locale', locale);
  I18n.locale = locale;
  // Lưu ngôn ngữ hiện tại vào AsyncStorage
  await LocalStorage.storeData('locale', locale);
};

const getLocale = async () => {
  const result = await LocalStorage.getData('locale');
  if (result) {
    return result;
  }
  return 'en';
};

// Khởi tạo ngôn ngữ từ AsyncStorage
const initLocale = async () => {
  const locale = await getLocale();
  setLocale(locale);
};

export {I18n, setLocale, initLocale};
