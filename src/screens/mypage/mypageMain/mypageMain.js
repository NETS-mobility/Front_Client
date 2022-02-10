import React from "react";
import { StyleSheet, ScrollView, Text, SafeAreaView, View, TouchableNativeFeedback } from "react-native";
import ServiceBlock from "../../../components/service/serviceBlock";
import typoStyles from "../../../assets/fonts/typography";
import CommonLayout from "../../../components/common/layout";
import BlueBlock from "../../../components/mypage/blueBlock";
import { ArrowBtn } from "../../../components/mypage/arrowBtn";
import { btnStyles } from "../../../assets/fonts/button";

const styles = StyleSheet.create({
    title: {
        width: '80%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 30,
    },
    logoutbtn: {
        width: 90,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    changebtn: {
        width: 130,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    setcenter: {
        alignItems: 'center',
    },
    usertext: {
        color: 'black',
    },
    infoalign: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    arrowset: {
        alignItems: 'center',
        height: 300,
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

const MypageMain = ({navigation}) => {
    return(
        <CommonLayout>
            <SafeAreaView>
                <View style={styles.setcenter}>
                <View style={styles.title}>
                    <Text style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>마이페이지</Text>
                    <TouchableNativeFeedback>
                        <View style={[btnStyles.btnBlue, styles.logoutbtn]}>
                            <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textWhite]}>로그아웃</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                </View>
                <BlueBlock>
                    <View style={styles.setcenter}>
                    <View style={styles.infoalign}>
                        <Text style={[typoStyles.fs20, typoStyles.fwBold, styles.usertext]}>최지우 고객님</Text>
                        <TouchableNativeFeedback onPress={()=>{navigation.push('ChangeInfo')}}>
                            <View style={[btnStyles.btnBlue, styles.changebtn]}>
                                <Text style={[typoStyles.fs14, typoStyles.fwBold, typoStyles.textWhite]}>내 정보 수정</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    </View>
                </BlueBlock>
                <View style={styles.arrowset}>
                    <ArrowBtn contents={"비밀번호 변경"} />
                    <ArrowBtn contents={"FAQ"} />
                    <ArrowBtn contents={"공지사항"} />
                    <ArrowBtn contents={"예약 변경 및 취소 수수료 안내"} />
                    <ArrowBtn contents={"약관 상세 확인"} />
                </View>
            </SafeAreaView>
        </CommonLayout>
    );
};

export default MypageMain;