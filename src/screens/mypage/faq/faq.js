import CommonLayout from '../../../components/common/layout';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import GetFAQ from '../../../api/mypage/getFAQ';
import React, {Fragment, useEffect, useState} from 'react';
import FaqBlock from '../../../components/mypage/faqBlock';

const styles = StyleSheet.create({
  faqScreen: {
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
  faqLists: {
    alignItems: 'center',
    paddingBottom: 30,
  },
});

const FaqScreen = () => {
  const [faqData, setFaqData] = useState();
  const [faqClick, setFaqClick] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setFaqData(await GetFAQ());
    };
    fetchData();
  }, []);

  useEffect(() => {
    faqData != undefined &&
      faqData.forEach(data => {
        setFaqClick(prev => ({...prev, [data.id]: false}));
      });
  }, [faqData]);

  return (
    <CommonLayout>
      <ScrollView style={styles.faqScreen}>
        <View style={styles.title}>
          <Text
            style={[typoStyles.fs32, typoStyles.fwBold, typoStyles.textMain]}>
            자주 묻는 질문
          </Text>
        </View>
        <View style={styles.faqLists}>
          {faqData?.map((data, i) => {
            return (
              <Fragment key={i}>
                <FaqBlock
                  type={'q'}
                  content={`Q. ${data.question}`}
                  onPress={() => {
                    setFaqClick(prev => ({
                      ...prev,
                      [data.id]: !faqClick[data.id],
                    }));
                  }}
                  clicked={faqClick[data.id]}
                />
                {faqClick[data.id] && (
                  <FaqBlock type={'a'} content={`A. ${data.answer}`} />
                )}
              </Fragment>
            );
          })}
        </View>
      </ScrollView>
    </CommonLayout>
  );
};

export default FaqScreen;
