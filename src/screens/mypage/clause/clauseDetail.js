import CommonLayout from '../../../components/common/layout';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import {GetDetailClause} from '../../../api/mypage/getClause';
import React, {useEffect, useState} from 'react';

const styles = StyleSheet.create({
  clauseScreen: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  title: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  clauseDetail: {
    width: '100%',
    height: '70%',
    paddingHorizontal: 10,
  },
});

const ClauseDetailScreen = ({route}) => {
  const [id] = useState(route.params.id);
  const [title] = useState(route.params.title);
  const [detail, setDetail] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setDetail(await GetDetailClause(id));
    };
    fetchData();
  }, [id]);

  return (
    <CommonLayout>
      <View style={styles.clauseScreen}>
        <View style={styles.title}>
          <Text
            style={[typoStyles.fs28, typoStyles.fwBold, typoStyles.textMain]}>
            {`${title} (${detail?.isEssential == true ? '필수' : '선택'})`}
          </Text>
        </View>
        <ScrollView style={styles.clauseDetail}>
          <Text>{detail?.content}</Text>
        </ScrollView>
      </View>
    </CommonLayout>
  );
};

export default ClauseDetailScreen;
