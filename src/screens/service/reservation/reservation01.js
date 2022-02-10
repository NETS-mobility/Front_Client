import React, {useState} from "react";
import { StyleSheet, ScrollView, Text, SafeAreaView, View, TouchableNativeFeedback } from "react-native";
import ServiceBlock from "../../../components/service/serviceBlock";
import typoStyles from "../../../assets/fonts/typography";
// import TimePicker from "../../../components/service/serviceTimePicker";
import { ServiceAddress } from "../../../components/service/serviceInputBox";
import CommonLayout from "../../../components/common/layout";
import { NextBtn } from "../../../components/service/serviceBtn";
import ServiceProgress from "../../../components/service/progress";

const styles = StyleSheet.create({
    background:{
        // backgroundColor: 'white',
    },
    step1title: {
        marginBottom: 7,
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        marginLeft: 30,
        marginBottom: 22,
    },
    proset: {
        alignItems: 'center',
    },
});

const Reservation01 = ({navigation}) => {

    const [pickaddr, setPickaddr] = useState("");
    const [pickdetail, setPickdetail] = useState("");

    const [hosaddr, setHosaddr] = useState("");
    const [hosdetail, setHosdetail] = useState("");

    const [isChecked, setCheck] = useState(true);

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
                            STEP1. 장소 설정
                        </Text>
                        <ServiceAddress prititle={"픽업"} exptitle={" 주소를 입력해주세요"} placeHolder={"픽업 주소"} Text1={pickaddr} setText1={setPickaddr} Text2={pickdetail} setText2={setPickdetail} />
                        <ServiceAddress prititle={"병원"} exptitle={" 주소를 입력해주세요"} placeHolder={"병원 주소"} Text1={hosaddr} setText1={setHosaddr} Text2={hosdetail} setText2={setHosdetail} />

                    </ServiceBlock>
                    <ServiceBlock>
                        <Text style={[
                            typoStyles.fs18,
                            typoStyles.fwBold,
                            typoStyles.textMain,
                            styles.step1title,
                            ]}>
                            STEP2. 일정 설정
                        </Text>

                    </ServiceBlock>
                    <View style={styles.btn}>
                        <NextBtn navWhere={()=>{navigation.push('Reservation02')}} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </CommonLayout>
    );
};

export default Reservation01;