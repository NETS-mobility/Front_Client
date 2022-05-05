import AsyncStorage from '@react-native-community/async-storage';

const CheckFirstLaunch = async () => {
  try {
    const isFirstLaunch = await AsyncStorage.getItem('keyFirstLaunch');
    if (isFirstLaunch === null) {
      console.log('설치 후 첫 실행입니다.');
      AsyncStorage.setItem('keyFirstLaunch', 'true');
      return true;
    }
    console.log('설치 후 첫 실행이 아닙니다.');
    return false;
  } catch (err) {
    console.log('설치 후 첫 실행이 아닙니다.');
    return false;
  }
};
export default CheckFirstLaunch;
