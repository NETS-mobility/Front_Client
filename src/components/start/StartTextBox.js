import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import NetsLogo from '../../assets/icon/logo_blue.svg';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
  leftbox: {
    width: 160,
    height: 222,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,
    backgroundColor: 'white',
    opacity: 0.8,
    paddingTop: 20,
    paddingLeft: 12,
  },

  rightbox: {
    width: 160,
    height: 222,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 4,
    backgroundColor: 'white',
    opacity: 0.7,
    alignItems: 'flex-end',
    paddingTop: 20,
    paddingRight: 12,
  },

  logo: {
    marginBottom: 30,
  },
});

const StartLeftBox = ({text}) => {
  return (
    <View style={styles.leftbox}>
      <NetsLogo width={126} height={48} style={styles.logo} />
      <Text
        style={[
          typoStyles.fs32,
          typoStyles.textExplain,
          typoStyles.fw700,
          typoStyles.line35,
        ]}>
        {text}
      </Text>
    </View>
  );
};

const StartRightBox = ({text}) => {
  return (
    <View style={styles.rightbox}>
      <NetsLogo width={126} height={48} style={styles.logo} />
      <Text
        style={[
          typoStyles.fs32,
          typoStyles.textExplain,
          typoStyles.fw700,
          typoStyles.line35,
          typoStyles.alignright,
        ]}>
        {text}
      </Text>
    </View>
  );
};

export {StartLeftBox, StartRightBox};
