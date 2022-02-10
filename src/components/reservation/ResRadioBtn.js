import React, {useState} from "react";
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import typoStyles from '../../assets/fonts/typography';

const styles = StyleSheet.create({
    nonebtn:{
        width: 160,
        height: 44,
        borderColor: '#DAD8E0',
        borderWidth: 3,
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },

    clickbtn:{
        width: 160,
        height: 44,
        backgroundColor: '#19B7CD',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textline:{
        flexDirection: 'row',
        marginBottom: 11,
    },

    btnset:{
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
});

const ResRadioBtn = ({check1, setCheck1, check2, setCheck2, primtitle, explaintitle, text1, text2}) => {
    // const [check1, setCheck1] = useState(false);
    // const [check2, setCheck2] = useState(false);

    return(
        <View>
            <View style={styles.textline}>
                <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textPrimary]}>{primtitle}</Text>
                <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>{explaintitle}</Text>
            </View>
            <View style={styles.btnset}>
                {!check1 || check2 ? (
                    <TouchableNativeFeedback onPress={()=>(setCheck1(true), setCheck2(false))}>
                        <View style={styles.nonebtn}>
                            <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textDisable]}>{text1}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    ) : (
                    <TouchableNativeFeedback onPress={()=>(setCheck1(false), setCheck2(true))}>
                        <View style={styles.clickbtn}>
                            <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textWhite]}>{text1}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    )}
                {check1 || !check2 ? (
                    <TouchableNativeFeedback onPress={()=>(setCheck2(true), setCheck1(false))}>
                        <View style={styles.nonebtn}>
                            <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textDisable]}>{text2}</Text>
                        </View>
                    </TouchableNativeFeedback>
                    ) : (
                    <TouchableNativeFeedback onPress={()=>(setCheck2(false), setCheck1(true))}>
                        <View style={styles.clickbtn}>
                            <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textWhite]}>{text2}</Text>
                        </View>
                    </TouchableNativeFeedback>
                )}
            </View>
        </View>
    );
};

export default ResRadioBtn;