import AsyncStorage from '@react-native-community/async-storage';
export const SetToken = token => {
  AsyncStorage.setItem('jwtToken', token, () => {
    console.log('token์ ' + token + '์๋๋ค');
  });
};

export const GetToken = () => {
  return new Promise((resolve, reject) => {
    const res = AsyncStorage.getItem('jwtToken', (err, result) => {
      return result;
    });
    resolve(res);
  });
};

export const DeleteToken = async () => {
  await AsyncStorage.clear();
  console.log('delete!');
};
