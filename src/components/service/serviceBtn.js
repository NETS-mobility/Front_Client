import React from 'react';
import {StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import {btnStyles} from '../../assets/fonts/button';
import typoStyles from '../../assets/fonts/typography';

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
    }
});

const NextBtn = ({navWhere}) => {
    return(
        <TouchableNativeFeedback onPress={navWhere}>
            <View style={[btnStyles.btnBlue, styles.nextbtn]}>
                <Text style={[typoStyles.fs20, typoStyles.textWhite, typoStyles.fwBold]}>
                    다음단계
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
};

const CheckBtn = ({check, setCheck, contents}) => {
    return(
        <View style={styles.checkset}>
            <TouchableNativeFeedback onPress={()=>setCheck(!check)}>
                <View style={!check? (styles.nonecheckcircle) : (styles.checkcircle)} />
            </TouchableNativeFeedback>
            <Text style={[typoStyles.fs14, typoStyles.fwRegular, styles.contents]}>{contents}</Text>
        </View>
    );
};

export {NextBtn, CheckBtn};