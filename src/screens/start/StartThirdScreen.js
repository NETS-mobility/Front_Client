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
    top: 320,
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
        <ImageBackground source={require('../../assets/image/startimg3.jpeg')} resizeMode='cover' style={styles.ImageStyle} />
        <View style={styles.right}>
          <StartRightBox text={"집까지\n편안하게"}/>
        </View>
        <View style={styles.CircleSet}>
          <StartWhiteCircle />
          <StartWhiteCircle />
          <StartOrangeCircle />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartFirstScreen;
