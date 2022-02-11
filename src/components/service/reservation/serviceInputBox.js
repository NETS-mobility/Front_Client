import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleSheet,
  TextInput,
} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {btnStyles} from '../../common/button';

const styles = StyleSheet.create({
  inputbox: {
    width: 217,
    height: 52,
    borderBottomWidth: 2,
  },

  detailbox: {
    width: 300,
    height: 52,
    borderBottomWidth: 2,
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
  Text1,
  setText1,
  Text2,
  setText2,
  navWhere,
}) => {
  const [isfocused, setFocus] = useState(false);

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
      <View style={styles.outside}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={[
            styles.inputbox,
            {borderBottomColor: isfocused ? '#19B7CD' : '#DAD8E0'},
          ]}
          underlineColorAndroid={'transparent'}
          placeholder={placeHolder}
          placeholderTextColor={typoStyles.textDisable}
          autoCapitalize="none"
          value={Text1}
          onChangeText={setText1}
        />
        <TouchableNativeFeedback onPress={navWhere}>
          <View
            style={
              isfocused
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
        </TouchableNativeFeedback>
      </View>
      <TextInput
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={[
          styles.detailbox,
          {borderBottomColor: isfocused ? '#19B7CD' : '#DAD8E0'},
        ]}
        underlineColorAndroid={'transparent'}
        placeholder={'상세주소'}
        placeholderTextColor={typoStyles.textDisable}
        autoCapitalize="none"
        value={Text2}
        onChangeText={setText2}
      />
    </View>
  );
};

const ServiceInputBox = ({
  title,
  place1,
  place2,
  Text1,
  setText1,
  Text2,
  setText2,
}) => {
  const [isfocused, setFocus] = useState(false);
  const [isfocused2, setFocus2] = useState(false);

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
        placeholderTextColor={typoStyles.textDisable}
        autoCapitalize="none"
        value={Text1}
        onChangeText={setText1}
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
        placeholderTextColor={typoStyles.textDisable}
        autoCapitalize="none"
        value={Text2}
        onChangeText={setText2}
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
        placeholderTextColor={typoStyles.textDisable}
        autoCapitalize="none"
        value={Text1}
        onChangeText={setText1}
      />
    </View>
  );
};

export {ServiceAddress, ServiceInputBox, ServiceInputBoxWithoutBtn};
