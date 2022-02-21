import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import FindAuthLayout from '../../components/findAuth/findAuthLayout';
import FindIDAPI from '../../api/auth/findID';

const FindID2 = ({route, navigation}) => {
  const {phone} = route.params;
  const [email, setEmail] = useState('');

  const getemail = async () => {
    await FindIDAPI({phone: phone}).then(r => {
      setTimeout(() => {
        console.log('this is r: ', r);
        setEmail(r);
      }, 100);
    });
  };

  useEffect(() => {
    getemail();
  }, []);

  return (
    <FindAuthLayout
      pageType="id"
      num={0}
      btnType="login"
      goBack={() => navigation.pop()}>
      <Text
        style={[
          typoStyles.textExplain,
          typoStyles.fs15,
          typoStyles.fw700,
          styles.oneLine,
        ]}>
        가입하신 아이디는
      </Text>
      <Text style={[typoStyles.textPrimary, typoStyles.fs20, typoStyles.fw700]}>
        {email.user_id}
        <Text
          style={[typoStyles.textExplain, typoStyles.fs15, typoStyles.fw700]}>
          입니다.
        </Text>
      </Text>
    </FindAuthLayout>
  );
};

const styles = StyleSheet.create({
  oneLine: {marginBottom: 20},
});

export default FindID2;
