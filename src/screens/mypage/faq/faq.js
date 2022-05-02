import CommonLayout from '../../../components/common/layout';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, StyleSheet} from 'react-native';
import typoStyles from '../../../assets/fonts/typography';
import GetFAQ from '../../../api/mypage/getFAQ';
import React, {Fragment, useEffect, useState} from 'react';
import FaqBlock from '../../../components/mypage/faqBlock';

const styles = StyleSheet.create({
  title: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  setcenter: {
    alignItems: 'center',
  },
});

const FaqScreen = () => {
  const [faqData, setFaqData] = useState();
  const [faqClick, setFaqClick] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setFaqData(await GetFAQ());
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (faqData != undefined) {
      faqData.forEach(data => {
        setFaqClick(prev => [...prev, false]);
      });
    }
  }, [faqData]);

  useEffect(() => {
    console.log('click!==', faqClick);
  }, [faqClick]);

  return (
    <CommonLayout>
      <SafeAreaView>
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
                  content={data.question}
                  onPress={() => {
                    // setFaqClick(prev => [...prev, !faqClick[i]]);

                    const test = faqClick;
                    test.splice(i, 1, !faqClick[i]);
                    console.log('test=', test);
                    setFaqClick(test);
                    console.log('faqClick=', faqClick);
                  }}
                />
                {faqClick[0] && <FaqBlock type={'a'} content={data.answer} />}
              </Fragment>
            );
          })}
        </View>
      </SafeAreaView>
    </CommonLayout>
  );
};

export default FaqScreen;
