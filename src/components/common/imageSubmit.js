import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import typoStyles from '../../assets/fonts/typography';
import CustomBtn from '../../assets/fonts/button';
import {btnStyles} from '../../assets/fonts/button';
import {launchImageLibrary} from 'react-native-image-picker';

const ImageSubmit = ({img, setImg}) => {
  const [ext, setExt] = useState('');

  const getExtension = () => {
    const splitImgName = img.split('.');
    setExt(`.${splitImgName[1]}`);
  };

  const selectImg = () => {
    launchImageLibrary({mediaType: 'photo'}, res => {
      console.log(res.assets[0].fileName);
      setImg(res.assets[0].fileName);
    });
  };

  useEffect(() => {
    getExtension();
  }, [img]);

  const styles = StyleSheet.create({
    submitImgBtn: {width: 219, height: 30, alignSelf: 'center'},
    imgName: {width: '60%', textAlign: 'left'},
  });

  return (
    <>
      <CustomBtn
        viewStyle={[btnStyles.btnBlue, styles.submitImgBtn]}
        textStyle={[typoStyles.textWhite, typoStyles.fs14, typoStyles.fw700]}
        viewStyleDisabled={[btnStyles.btnDisable, styles.submitImgBtn]}
        text={'증명서류 제출'}
        onPress={selectImg}
      />
      {img == '' ? (
        <></>
      ) : (
        <Text style={styles.imgName}>
          선택된 파일: {img.substring(25, 30) + '... ' + ext}
        </Text>
      )}
    </>
  );
};

export default ImageSubmit;
