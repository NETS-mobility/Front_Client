import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, TouchableNativeFeedback} from 'react-native';
import NetsLogo from '../../assets/image/logo.svg';
import LoginInputBox from '../../components/login/LoginInputBox'
import { LoginBtn } from '../../components/login/LoginBtn';

const styles = StyleSheet.create({
    wrap:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    netImg: {
        marginBottom: 72,
    },

    inputBox: {
        marginTop: 57,
    },

    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(email);
    console.log(password);

    return(
        <SafeAreaView style={styles.wrap}>
            <NetsLogo width={175} height={70} style={styles.netImg}/>
            <LoginInputBox placeHolder={"이메일"} Text={email} setText={setEmail}/>
            <LoginInputBox isPass={true} placeHolder={"비밀번호"} Text={password} setText={setPassword} />
            <View style={styles.inputBox}>
                <LoginBtn btnName={"로그인"} />
            </View>
            <View style={styles.bottom}>
                <TouchableNativeFeedback onPress={() => navigation.push('LoginMain')}>
                    <Text>아이디 찾기  </Text>
                </TouchableNativeFeedback>
                <Text>|</Text>
                <TouchableNativeFeedback onPress={() => navigation.push('LoginMain')}>
                    <Text>  비밀번호 찾기</Text>
                </TouchableNativeFeedback>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;
