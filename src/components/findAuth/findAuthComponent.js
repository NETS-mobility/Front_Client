import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export const InputBox = ({
  placeholder,
  keyBoard,
  returnKey,
  value,
  setVal,
  styles,
}) => {
  const [focus, setFocus] = useState(false);
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyBoard}
      returnKeyType={returnKey}
      value={value}
      onChangeText={setVal}
      style={[focus ? style.iColor1 : style.iColor2, style.inputBox, styles]}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  );
};

export const ProgressBar = ({num}) => {
  return (
    <View style={style.progressBar}>
      {num == 0 ? (
        <></>
      ) : (
        <>
          <View style={[style.progress, style.pColor1]} />
          {num == 1 ? (
            <View style={[style.progress, style.pColor2]} />
          ) : (
            <View style={[style.progress, style.pColor1]} />
          )}
        </>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  inputBox: {
    padding: 10,
    paddingTop: 26,
    borderBottomWidth: 3,
  },
  iColor1: {
    borderBottomColor: '#19B7CD',
  },
  iColor2: {
    borderBottomColor: '#DAD8E0',
  },
  progressBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 53,
  },
  progress: {
    width: '49%',
    height: 8,
    backgroundColor: '#19B7CD',
    borderRadius: 30,
  },
  pColor1: {
    backgroundColor: '#19B7CD',
  },
  pColor2: {
    backgroundColor: '#DAD8E0',
  },
});
