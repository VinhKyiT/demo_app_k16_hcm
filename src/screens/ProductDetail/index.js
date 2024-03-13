import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useRoute} from '@react-navigation/native';
import AppHeader from '~components/AppHeader';
import NavigationServices from '~utils/NavigationServices';
import {COLORS} from '~constants/colors';
import Carousel from 'react-native-reanimated-carousel';
import FastImage from 'react-native-fast-image';
import {DIMENSIONS} from '~constants/dimensions';
import Dots from '~components/Dots';
import AppText from '~components/AppText';
import {FONTS} from '~constants/fonts';
import BodySection from './components/BodySection';
import AppButton from '~components/AppButton';
import useCart from '~hooks/useCart';

const ProductDetailScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const route = useRoute();
  const productItem = route?.params?.item || {};
  const {handleAddToCart} = useCart();

  return (
    <View style={styles.container}>
      <AppHeader
        leftIcon={{
          iconName: 'left',
          iconType: 'antdesign',
          iconColor: COLORS.BLACK,
          iconSize: 24,
          onIconPress: NavigationServices.goBack,
        }}
        rightIcon={{
          iconName: 'hearto',
          iconType: 'antdesign',
          iconColor: COLORS.BLACK,
          iconSize: 24,
          onIconPress: () => {
            console.log('add to wishlist');
          },
        }}
      />
      <Carousel
        data={productItem?.photos}
        renderItem={({item, index}) => {
          return (
            <View style={styles.carouselItem}>
              <FastImage source={{uri: item}} style={styles.carouselImage} />
            </View>
          );
        }}
        width={DIMENSIONS.SCREEN_WIDTH}
        height={280}
        autoPlay
        autoPlayInterval={3000}
        scrollAnimationDuration={500}
        loop
        onProgressChange={(_, absoluteProgress) => {
          setCurrentIndex(Math.round(absoluteProgress));
        }}
      />
      <View style={styles.dotContainer}>
        <Dots length={productItem?.photos?.length} currentIndex={currentIndex} />
      </View>
      <View style={styles.productInfoWrapper}>
        <AppText font={FONTS.ROUNDED.SEMIBOLD} size={28} align={'center'}>
          {productItem?.name}
        </AppText>
        <AppText font={FONTS.ROUNDED.BOLD} size={22} align={'center'} color={COLORS.APP_ORANGE}>
          {productItem?.price?.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}
        </AppText>
      </View>
      <View style={styles.bodySection}>
        <BodySection
          title="Delivery info"
          description="Delivered between monday aug and thursday 20 from 8pm to 91:32 pm"
        />
        <BodySection
          title="Return policy"
          description="All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately."
          containerStyle={{marginTop: 24}}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={'Add to cart'}
          onPress={() => {
            handleAddToCart(productItem);
          }}
        />
      </View>
    </View>
  );
};

export default ProductDetailScreen;
