import AsyncStorage from '@react-native-community/async-storage';
export const SetToken = token => {
  AsyncStorage.setItem('jwtToken', token, () => {
    console.log('token은 ' + token + '입니다');
  });
};

export const GetToken = async () => {
  let token = '';
  await AsyncStorage.getItem('jwtToken', (err, result) => {
    console.log('err는 ', err);
    console.log('result는 ' + result + '입니다');
    token = result;
  });
  return token;
};

export const DeleteToken = async () => {
  await AsyncStorage.clear();
  console.log('delete!');
};
