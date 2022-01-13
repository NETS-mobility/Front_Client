import React from 'react';
import {SafeAreaView, StyleSheet, ImageBackground, View} from 'react-native';
import {StartLeftBox} from '../components/start/StartTextBox';
import { StartOrangeCircle, StartWhiteCircle } from '../components/start/StartCircle';

const styles = StyleSheet.create({
  ImageStyle: {
    position: 'absolute',
    opacity: 0.6,
    width: '100%',
    height: '100%',    
  },

  ImageBackgroundContiner: {
    backgroundColor: '#E5E8E7',
    width: '100%',
    height: '100%',
  },

  left: {
    position:'absolute',
    top: 90,
  },

  CircleSet: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'flex-end',
    marginBottom: 29,
  },
});

const StartFirstScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.ImageBackgroundContiner}>
        <ImageBackground source={require('../assets/image/startimg1.png')} resizeMode='contain' style={styles.ImageStyle} />
        <View style={styles.left}>
          <StartLeftBox />
        </View>
        <View style={styles.CircleSet}>
          <StartOrangeCircle />
          <StartWhiteCircle />
          <StartWhiteCircle />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartFirstScreen;
