import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {btnStyles} from '../../common/button';

const styles = StyleSheet.create({
  nextbtn: {
    width: 300,
    height: 45,
    marginBottom: 16,
  },

  nonecheckcircle: {
    width: 18,
    height: 18,
    borderRadius: 50,
    borderColor: '#19B7CD',
    borderWidth: 2,
  },

  checkcircle: {
    width: 18,
    height: 18,
    borderRadius: 50,
    backgroundColor: '#19B7CD',
  },

  contents: {
    color: 'black',
    marginLeft: 8,
  },

  checkset: {
    flexDirection: 'row',
    alignContent: 'center',
  },
});

const NextBtn = ({navWhere, disable}) => {
  return (
    <TouchableOpacity onPress={navWhere} disabled={disable}>
      <View style={[btnStyles.btnBlue, styles.nextbtn]}>
        <Text
          style={[typoStyles.fs20, typoStyles.textWhite, typoStyles.fwBold]}>
          다음단계
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CheckBtn = ({num, check, setCheck, contents}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        const newCheck = check;
        newCheck[num] = !newCheck[num];
        check = newCheck;
        setCheck([...check]);
      }}
      style={styles.checkset}>
      <View style={!check[num] ? styles.nonecheckcircle : styles.checkcircle} />
      <Text style={[typoStyles.fs14, typoStyles.fwRegular, styles.contents]}>
        {contents}
      </Text>
    </TouchableOpacity>
  );
};

export {NextBtn, CheckBtn};
