import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';

const styles = StyleSheet.create({
  nonebtn: {
    width: 160,
    height: 44,
    borderColor: '#DAD8E0',
    borderWidth: 3,
    borderRadius: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  clickbtn: {
    width: 160,
    height: 44,
    backgroundColor: '#19B7CD',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textline: {
    flexDirection: 'row',
    marginBottom: 11,
  },

  btnset: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
});

const ResRadioBtn = ({
  check,
  setCheck,
  check1,
  primtitle,
  explaintitle,
  text1,
  text2,
}) => {
  return (
    <View>
      <View style={styles.textline}>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textPrimary]}>
          {primtitle}
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
          {explaintitle}
        </Text>
      </View>
      <View style={styles.btnset}>
        {!check[check1] || check[check1 + 1] ? (
          <TouchableNativeFeedback
            onPress={() => {
              check[check1] = true;
              check[check1 + 1] = false;
              setCheck([...check]);
            }}>
            <View style={styles.nonebtn}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textDisable,
                ]}>
                {text1}
              </Text>
            </View>
          </TouchableNativeFeedback>
        ) : (
          <TouchableNativeFeedback
            onPress={() => {
              check[check1] = false;
              check[check1 + 1] = true;
              setCheck([...check]);
            }}>
            <View style={styles.clickbtn}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textWhite,
                ]}>
                {text1}
              </Text>
            </View>
          </TouchableNativeFeedback>
        )}
        {check[check1] || !check[check1 + 1] ? (
          <TouchableNativeFeedback
            onPress={() => {
              check[check1] = false;
              check[check1 + 1] = true;
              setCheck([...check]);
            }}>
            <View style={styles.nonebtn}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textDisable,
                ]}>
                {text2}
              </Text>
            </View>
          </TouchableNativeFeedback>
        ) : (
          <TouchableNativeFeedback
            onPress={() => {
              check[check1] = true;
              check[check1 + 1] = false;
              setCheck([...check]);
            }}>
            <View style={styles.clickbtn}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textWhite,
                ]}>
                {text2}
              </Text>
            </View>
          </TouchableNativeFeedback>
        )}
      </View>
    </View>
  );
};

export default ResRadioBtn;
