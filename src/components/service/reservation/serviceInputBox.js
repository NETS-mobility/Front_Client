import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {btnStyles} from '../../common/button';
import PutAddress from './address';

const styles = StyleSheet.create({
  inputbox: {
    width: 217,
    height: 52,
    borderBottomWidth: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  detailbox: {
    width: 300,
    height: 52,
    borderBottomWidth: 2,
    color: 'black',
  },

  signbtn: {
    width: 75,
    height: 30,
    justifyContent: 'flex-end',
    marginBottom: 5,
  },

  outside: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titlebox: {
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 5,
  },
});

const ServiceAddress = ({
  prititle,
  exptitle,
  placeHolder,
  addr,
  setAddr,
  propName,
  navWhere,
}) => {
  const [isfocused, setFocus] = useState(false);
  const [isModal, setModal] = useState(false);
  const [sido, setSido] = useState('');

  const [fullAddr, setFullAddr] = useState('');
  const [detailAddr, setDetailAddr] = useState('');

  useEffect(() => {
    console.log('fullAddr==', fullAddr);
    console.log('sido==', sido);
  }, [fullAddr, sido]);

  useEffect(() => {
    if (fullAddr != '') {
      setAddr({...addr, [propName]: `${fullAddr} ${detailAddr}`});
    }
  }, [fullAddr, detailAddr]);

  return (
    <View>
      <View style={styles.titlebox}>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textPrimary]}>
          {prititle}
        </Text>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
          {exptitle}
        </Text>
      </View>
      <TouchableOpacity onPress={() => setModal(true)}>
        <View style={styles.outside}>
          <View
            style={[
              styles.inputbox,
              {
                borderBottomColor:
                  sido == '서울' || sido == '경기' || sido == ''
                    ? '#DAD8E0'
                    : '#fb7348',
              },
            ]}>
            {fullAddr == '' ? (
              <Text style={[typoStyles.fs14, typoStyles.textDisable]}>
                픽업주소
              </Text>
            ) : (
              <Text style={[typoStyles.fs14, typoStyles.textExplainBold]}>
                {fullAddr}
              </Text>
            )}
          </View>
          <View
            style={
              isModal
                ? [styles.signbtn, btnStyles.btnBlue]
                : [styles.signbtn, btnStyles.btnDisable]
            }>
            <Text
              style={[
                typoStyles.fs14,
                typoStyles.textWhite,
                typoStyles.fwBold,
              ]}>
              주소검색
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {sido != '서울' && sido != '경기' && sido != '' ? (
        <Text style={[typoStyles.fs14, typoStyles.textPrimary]}>
          현재 서울, 경기 지역만 서비스 가능합니다.
        </Text>
      ) : (
        <></>
      )}
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[
          styles.detailbox,
          {borderBottomColor: isfocused ? '#19B7CD' : '#DAD8E0'},
        ]}
        underlineColorAndroid={'transparent'}
        placeholder={'상세주소'}
        placeholderTextColor={'#DAD8E0'}
        autoCapitalize="none"
        value={detailAddr}
        onChangeText={setDetailAddr}
      />
      {isModal ? (
        <PutAddress
          isModal={isModal}
          setModal={setModal}
          setAddr={setFullAddr}
          setSido={setSido}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

const ServiceInputBox = ({title, place1, place2, placetextcolor, setText}) => {
  const [isfocused, setFocus] = useState(false);
  const [isfocused2, setFocus2] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setText({['name']: name, ['phone']: phone});
  }, [name, phone]);

  return (
    <View>
      <View style={styles.titlebox}>
        <Text
          style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
          {title}
        </Text>
      </View>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[
          styles.detailbox,
          {borderBottomColor: isfocused ? '#19B7CD' : '#DAD8E0'},
        ]}
        underlineColorAndroid={'transparent'}
        placeholder={place1}
        placeholderTextColor={placetextcolor}
        autoCapitalize="none"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        onFocus={() => setFocus2(true)}
        onBlur={() => setFocus2(false)}
        style={[
          styles.detailbox,
          {borderBottomColor: isfocused2 ? '#19B7CD' : '#DAD8E0'},
        ]}
        underlineColorAndroid={'transparent'}
        placeholder={place2}
        placeholderTextColor={placetextcolor}
        autoCapitalize="none"
        value={phone}
        onChangeText={setPhone}
      />
    </View>
  );
};

const ServiceInputBoxWithoutBtn = ({title, place1, Text1, setText1}) => {
  const [isfocused, setFocus] = useState(false);
  return (
    <View>
      {title == '없음' ? (
        <></>
      ) : (
        <View style={styles.titlebox}>
          <Text
            style={[
              typoStyles.fs14,
              typoStyles.fwBold,
              typoStyles.textExplain,
            ]}>
            {title}
          </Text>
        </View>
      )}
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[
          styles.detailbox,
          {borderBottomColor: isfocused ? '#19B7CD' : '#DAD8E0'},
        ]}
        underlineColorAndroid={'transparent'}
        placeholder={place1}
        placeholderTextColor={'#DAD8E0'}
        autoCapitalize="none"
        value={Text1}
        onChangeText={setText1}
      />
    </View>
  );
};

export {ServiceAddress, ServiceInputBox, ServiceInputBoxWithoutBtn};
