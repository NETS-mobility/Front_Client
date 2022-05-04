import CommonLayout from '../../../components/common/layout';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {GetAllClause} from '../../../api/mypage/getClause';
import React, {useEffect, useState} from 'react';
import ClauseBlock from '../../../components/mypage/clauseBlock';

const styles = StyleSheet.create({
  clauseScreen: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  clauseLists: {
    alignItems: 'center',
    paddingBottom: 30,
  },
});

const ClauseScreen = ({navigation}) => {
  const [clauseData, setClauseData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setClauseData(await GetAllClause());
    };
    fetchData();
  }, []);

  return (
    <CommonLayout>
      <ScrollView style={styles.clauseScreen}>
        <View style={styles.title}>
          <Text
            style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>
            약관 상세 확인
          </Text>
        </View>
        <View style={styles.clauseLists}>
          {clauseData?.map((data, i) => {
            return (
              <ClauseBlock
                key={i}
                content={data.content}
                onPress={() =>
                  navigation.navigate('ClauseDetail', {
                    id: data.id,
                    title: data.content,
                  })
                }
              />
            );
          })}
        </View>
      </ScrollView>
    </CommonLayout>
  );
};

export default ClauseScreen;
