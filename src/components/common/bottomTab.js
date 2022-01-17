import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Home from '../../assets/icon/tab/home.svg';
import Alarm from '../../assets/icon/tab/alarm.svg';
import MyPage from '../../assets/icon/tab/mypage.svg';
import Service from '../../assets/icon/tab/service.svg';

const BottomTab = () => {
  return (
    <View style={styles.bottomTab}>
      <TouchableOpacity>
        <Home width={70} height={55} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Alarm width={70} height={55} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MyPage width={70} height={55} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Service width={70} height={55} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
  },
});
export default BottomTab;
