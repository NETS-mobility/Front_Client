import React, {useEffect, useContext} from 'react';
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
import {
  NoticeBlock,
  NoTokenNoticeBlock,
} from '../../components/home/noticeBlock';
import {RefreshContext} from '../../../App';

const Home = ({navigation}) => {
  const {refresh, setRefresh} = useContext(RefreshContext);
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
        {refresh != null ? <NoticeBlock /> : <NoTokenNoticeBlock />}
        <TouchableOpacity
          style={[shadowStyles.shadow, btnStyles.btnBlue, styles.btn]}
          onPress={() => {
            if (refresh != null) navigation.push('ReservationMainScreen');
            else navigation.push('LoginMain');
          }}>
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
