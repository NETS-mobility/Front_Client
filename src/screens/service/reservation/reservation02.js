import React, {useState} from "react";
import { StyleSheet, ScrollView, Text, SafeAreaView, View, TouchableNativeFeedback } from "react-native";
import ServiceBlock from "../../../components/service/serviceBlock";
import typoStyles from "../../../assets/fonts/typography";
import CommonLayout from "../../../components/common/layout";
import { NextBtn, CheckBtn } from "../../../components/service/serviceBtn";
import { ServiceInputBox } from "../../../components/service/serviceInputBox";
import ServiceProgress from "../../../components/service/progress";
import { btnStyles } from "../../../assets/fonts/button";

const styles = StyleSheet.create({
    title:{
        marginLeft: 30,
        marginBottom: 22,
    },
    proset: {
        alignItems: 'center',
    },
    exptext: {
        marginTop: 38,
        marginBottom: 29,
    },
    checkset: {
        height: 100,
        justifyContent: 'space-between',
        marginBottom: 40,
    },
    sectext: {
        flexDirection: 'row',
    },
    subbtn: {
        width: 219,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    }
});

const Reservation02 = ({navigation}) => {

    const [guardName, setGuardName] = useState("");
    const [guardPhone, setGuardPhone] = useState("");

    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    
    return(
        <CommonLayout>
            <SafeAreaView style={styles.background}>
                <ScrollView style={styles.background}>
                    <View style={styles.title}>
                        <Text style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>서비스예약</Text>
                    </View>
                    <View style={styles.proset}>
                        <ServiceProgress />
                    </View>
                    <ServiceBlock>
                        <Text style={[
                            typoStyles.fs18,
                            typoStyles.fwBold,
                            typoStyles.textMain,
                            styles.step1title,
                            ]}>
                            STEP1. 정보 입력
                        </Text>
                        <ServiceInputBox title={"보호자 정보를 입력해주세요."} place1={"최지우"} place2={"010-1234-1234"} Text1={guardName} setText1={setGuardName} Text2={guardPhone} setText2={setGuardPhone} />
                        <ServiceInputBox title={"이용자 정보를 입력해주세요."} place1={"이용자 이름"} place2={"이용자 전화번호"} Text1={userName} setText1={setUserName} Text2={userPhone} setText2={setUserPhone} />
                    </ServiceBlock>
                    <ServiceBlock>
                        <Text style={[
                            typoStyles.fs18,
                            typoStyles.fwBold,
                            typoStyles.textMain,
                            styles.step1title,
                            ]}>
                            STEP2. 이용대상 체크
                        </Text>
                        <Text style={[typoStyles.fs14, typoStyles.fwRegular, typoStyles.textExplain, styles.exptext]}>
                            네츠모빌리티는 65세 이상 고령자, 장애인, 일시적 거동불편자 등 이동약자가 진료 및 치료목적으로 이동하는 경우만 이용이 가능하며, 소견서, 진료 예약증, 입원예정서, 내원 목적의 진단서(투석, 항암치료에 한함)등 증명서류를 고객센터로 제출하셔야 이동서비스가 가능합니다.
                        </Text>
                        <View style={styles.checkset}>
                            <CheckBtn check={check1} setCheck={setCheck1} contents={"65세 이상 고령자"} />
                            <CheckBtn check={check2} setCheck={setCheck2} contents={"장애인"} />
                            <CheckBtn check={check3} setCheck={setCheck3} contents={"거동불편자"} />
                            <CheckBtn check={check4} setCheck={setCheck4} contents={"해당없음"} />
                        </View>
                        <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>증명서류를 제출해주세요.</Text>
                        <View style={styles.sectext}>
                            <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>(당일 지참 가능하나, </Text>
                            <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textPrimary]}>서류 미확인 시 탑승 불가</Text>
                            <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textExplain]}>)</Text>
                        </View>
                        <View style={styles.proset}>
                        <TouchableNativeFeedback>
                            <View style={[btnStyles.btnBlue, styles.subbtn]}>
                                <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textWhite]}>증명서류 제출</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <Text style={[typoStyles.fs12, typoStyles.fwBold, typoStyles.textExplain]}>선택된 파일: 20120000.jpg</Text>
                        </View>
                    </ServiceBlock>
                    <View style={styles.proset}>
                        <NextBtn navWhere={()=>{navigation.push('Reservation03')}} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </CommonLayout>
    );

};

export default Reservation02;