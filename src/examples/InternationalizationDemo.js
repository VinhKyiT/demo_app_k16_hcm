import {View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import React, {useMemo, useRef, useState} from 'react';
import {I18n, setLocale} from '../i18n';
import CustomButton from '../components/CustomButton';
import RNRestart from 'react-native-restart';
import Modal from 'react-native-modal';
import {showModal} from '../components/AppModal';
import BottomSheet from '@gorhom/bottom-sheet';
import AppText from '~components/AppText';

const InternationalizationDemo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // ref
  const bottomSheetRef = useRef(null);

  const handleChangeLanguage = lang => {
    setLocale(lang);
    // Alert.alert(I18n.t('alert.alertTitle'), I18n.t('alert.alertLanguageChanged'), [
    //   {
    //     text: 'OK',
    //     onPress: () => {
    //       RNRestart.Restart();
    //     },
    //   },
    // ]);
    showModal({
      title: I18n.t('alert.alertTitle'),
      content: I18n.t('alert.alertLanguageChanged'),
      onConfirm: RNRestart.Restart,
    });
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  // snap point
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    <View style={{flex: 1}}>
      <Text>{I18n.t('welcome')}</Text>
      <Text>{I18n.t('greet', {name: 'John'})}</Text>
      <CustomButton
        title="Switch to English"
        onPress={() => {
          handleChangeLanguage('en');
        }}
      />
      <CustomButton
        title="Switch to Vietnamese"
        onPress={() => {
          handleChangeLanguage('vi');
        }}
      />
      <CustomButton
        title="Open Modal"
        onPress={() => {
          showModal({
            title: I18n.t('alert.alertTitle'),
            content: 'Day la noi dung thong bao',
            onConfirm: () => {
              console.log('da nhan vao nut confirm');
            },
            // closeModalOnBackdropPress: true,
          });
        }}
      />
      <CustomButton
        title="Change Language"
        onPress={() => {
          bottomSheetRef.current.snapToIndex(0);
        }}
      />
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInUp" // Hiệu ứng khi mở Modal
        animationOut="slideOutDown" // Hiệu ứng khi đóng Modal
        onBackdropPress={toggleModal} // Đóng Modal khi chạm vào nền đen (Backdrop)
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={toggleModal}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <BottomSheet
        handleIndicatorStyle={{backgroundColor: 'red'}}
        index={-1}
        ref={bottomSheetRef}
        enablePanDownToClose
        snapPoints={snapPoints}>
        <View style={{paddingHorizontal: 16}}>
          <TouchableOpacity
            style={{paddingVertical: 16}}
            onPress={() => {
              handleChangeLanguage('en');
            }}>
            <AppText>English</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{paddingVertical: 16}}
            onPress={() => {
              handleChangeLanguage('vi');
            }}>
            <AppText>Tiếng Việt</AppText>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
};

export default InternationalizationDemo;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
