import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import AppIcon from '~components/AppIcon';
import styles from './styles';
import AppInput from '~components/AppInput';
import NavigationServices from '~utils/NavigationServices';
import {foodData} from '~mock';
import ProductItem from '~components/ProductItem';
import AppText from '~components/AppText';
import {FONTS} from '~constants/fonts';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [txt, setTxt] = useState('');
  const typingTimerRef = useRef();

  const handleInputChange = useCallback(text => {
    setSearchTerm(text);
    if (typingTimerRef?.current) {
      clearTimeout(typingTimerRef.current);
    }
    typingTimerRef.current = setTimeout(() => {
      // do something...
      setTxt(text);
    }, 500);
  }, []);
  useEffect(() => {
    console.log(txt);
  }, [txt]);

  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={[styles.itemContainer, {marginTop: index % 2 !== 0 ? 96 : 48}]}>
        <ProductItem item={item} />
      </View>
    );
  }, []);

  const ListHeaderComponent = useCallback(() => {
    return (
      <AppText
        font={FONTS.ROUNDED.BOLD}
        size={28}
        align={'center'}>{`Found ${foodData.length} items`}</AppText>
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={NavigationServices.goBack}>
          <AppIcon type="antdesign" name={'left'} />
        </TouchableOpacity>
        <AppInput
          value={searchTerm}
          onChangeText={handleInputChange}
          containerStyle={styles.inputContainer}
          placeholder="search..."
        />
      </View>
      <FlatList
        data={foodData}
        renderItem={renderItem}
        numColumns={2}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
};

export default SearchScreen;
