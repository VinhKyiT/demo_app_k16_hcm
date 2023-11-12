import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            resizeMode: 'cover',
            height: 100,
            width: 200,
          }}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/669721000137785345/9lnKB5Ti_400x400.jpg',
          }}
        />
        <Text>resizeMode : cover</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'contain',
            height: 100,
            width: 200,
          }}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/669721000137785345/9lnKB5Ti_400x400.jpg',
          }}
        />
        <Text>resizeMode : contain</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'stretch',
            height: 100,
            width: 200,
          }}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/669721000137785345/9lnKB5Ti_400x400.jpg',
          }}
        />
        <Text>resizeMode : stretch</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'repeat',
            height: 100,
            width: 200,
          }}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/669721000137785345/9lnKB5Ti_400x400.jpg',
          }}
        />
        <Text>resizeMode : repeat</Text>
      </View>
      <View>
        <Image
          style={{
            resizeMode: 'center',
            height: 100,
            width: 100,
            borderRadius: 999,
          }}
          source={{
            uri: 'https://pbs.twimg.com/profile_images/669721000137785345/9lnKB5Ti_400x400.jpg',
          }}
        />
        <Text>resizeMode : center</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  },
});

export default DisplayAnImageWithStyle;
