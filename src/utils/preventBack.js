import {BackHandler} from 'react-native';

const PreventBack = () => {
  const onBackPress = () => {
    return true;
  };

  BackHandler.addEventListener('hardwareBackPress', onBackPress);

  return () =>
    BackHandler.removeEventListener('hardwareBackPress', onBackPress);
};

export default PreventBack;
