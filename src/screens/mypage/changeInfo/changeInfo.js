import React, {useState} from "react";
import { StyleSheet, View, SafeAreaView, Text  } from "react-native";
import typoStyles from "../../../assets/fonts/typography";
import CommonLayout from "../../../components/common/layout";
import { btnStyles } from "../../../assets/fonts/button";
import { ChangeInput, ChangeInputWithBtn } from "../../../components/mypage/changeInput";

const styles=StyleSheet.create({
    title:{
        marginLeft: 30,
    },
    setcenter: {
        alignItems: 'center'
    }
});

const ChangeInfo = () => {
    const [name, setName] = useState("");
    return(
        <CommonLayout>
            <SafeAreaView>
                <View style={styles.title}>
                    <Text style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>마이페이지</Text>
                </View>
                <View style={styles.setcenter}>
                    <ChangeInput title={"이름"} place1={"이름"} Text1={name} setText1={setName} />
                    <ChangeInputWithBtn title={"이메일"} place1={"이메일"} Text1={name} setText1={setName} btntext={"중복확인"} />
                    <ChangeInputWithBtn title={"휴대전화"} place1={"휴대전화"} Text1={name} setText1={setName} btntext={"중복확인"}/>
                </View>
            </SafeAreaView>
        </CommonLayout>
    );
};

export default ChangeInfo;