import React from 'react';
import {SafeAreaView, StyleSheet, ImageBackground, View} from 'react-native';
import {StartRightBox} from '../../components/start/StartTextBox';
import { StartOrangeCircle, StartWhiteCircle } from '../../components/start/StartCircle';

const styles = StyleSheet.create({
  ImageStyle: {
    position: 'absolute',
    opacity: 0.6,
    width: '100%',
    height: '100%',    
  },

  ImageBackgroundContiner: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },

  right: {
    flex: 1,
    alignItems: 'flex-end',
    top: 50,
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
        <ImageBackground source={require('../../assets/image/startimg2.png')} resizeMode='cover' style={styles.ImageStyle} />
        <View style={styles.right}>
          <StartRightBox text={"병원\n이동을\n안전하게"}/>
        </View>
        <View style={styles.CircleSet}>
          <StartWhiteCircle />
          <StartOrangeCircle />
          <StartWhiteCircle />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartFirstScreen;
