import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {btnStyles} from '../common/button';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
  detailbox: {
    width: 250,
    height: 52,
    borderBottomWidth: 2,
  },
  boxalign: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  boxAlignWithBtn: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  boxalign2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnbox: {
    width: 163,
    height: 52,
    borderBottomWidth: 2,
  },
  btn: {
    width: 87,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ChangeInput = ({title, place1, Text1, setText1}) => {
  const [isfocused, setFocus] = useState(false);

  return (
    <View style={styles.boxalign}>
      <Text
        style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
        {title}
      </Text>
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

const ChangeInputWithBtn = ({
  title,
  place1,
  Text1,
  setText1,
  btntext,
  onPress,
}) => {
  const [isfocused, setFocus] = useState(false);

  return (
    <View style={styles.boxAlignWithBtn}>
      <Text
        style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>
        {title}
      </Text>
      <View style={styles.boxalign2}>
        <TextInput
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={[
            styles.btnbox,
            {borderBottomColor: isfocused ? '#19B7CD' : '#DAD8E0'},
          ]}
          underlineColorAndroid={'transparent'}
          placeholder={place1}
          placeholderTextColor={'#DAD8E0'}
          autoCapitalize="none"
          value={Text1}
          onChangeText={setText1}
        />
        <View style={styles.btnset}>
          <TouchableOpacity onPress={onPress}>
            <View style={[btnStyles.btnBlue, styles.btn]}>
              <Text
                style={[
                  typoStyles.fs14,
                  typoStyles.fwBold,
                  typoStyles.textWhite,
                ]}>
                {btntext}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export {ChangeInput, ChangeInputWithBtn};
