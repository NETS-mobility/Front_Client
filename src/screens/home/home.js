import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {btnStyles, shadowStyles} from '../../components/common/button';
import typoStyles from '../../assets/fonts/typography';
import CommonLayout from '../../components/common/layout';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation}) => {
  //  const isFocused = useIsFocused();

  const styles = StyleSheet.create({
    img: {
      position: 'relative',
      width: '100%',
      height: 200,
    },
    imgBox: {
      position: 'absolute',
      top: 57,
      width: '100%',
      height: 200,
      backgroundColor: '#19B7CD',
      opacity: 0.38,
    },
    title: {
      position: 'absolute',
      top: 115,
      left: 36,
    },
    text: {
      marginBottom: 30,
    },
    btn: {
      width: 328,
      height: 47,
      alignSelf: 'center',
      marginBottom: 40,
    },
    howTo: {
      width: '100%',
      height: 347,
      backgroundColor: '#c4c4c4',
      justifyContent: 'center',
    },
    tempTxt: {
      textAlign: 'center',
    },
  });

  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     // The screen is focused
  //     // Call any action and update data
  //   });
  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [navigation]);

  return (
    <CommonLayout>
      <Image
        source={require('../../assets/image/startimg2.png')}
        style={styles.img}
      />
      <View style={styles.imgBox}></View>
      <Text
        style={[
          typoStyles.fs32,
          typoStyles.fw700,
          typoStyles.textWhite,
          styles.title,
        ]}>
        {`네츠\n모빌리티`}
      </Text>
      <ScrollView>
        <Text
          style={[
            typoStyles.textPrimary,
            typoStyles.fs32,
            typoStyles.fw700,
            styles.text,
          ]}>
          문구 추가
        </Text>
        <TouchableOpacity
          style={[shadowStyles.shadow, btnStyles.btnBlue, styles.btn]}
          onPress={() => navigation.push('ReservationMainScreen')}>
          <Text
            style={[typoStyles.fs20, typoStyles.fw700, typoStyles.textWhite]}>
            클릭해서 서비스 예약하기
          </Text>
        </TouchableOpacity>

        <View style={styles.howTo}>
          <Text style={styles.tempTxt}>이용안내 이미지</Text>
        </View>
      </ScrollView>
    </CommonLayout>
  );
};
export default Home;
