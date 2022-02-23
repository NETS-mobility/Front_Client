import axios from 'axios';
import {SetToken} from '../../utils/controlToken';

const LoginAPI = data => {
  const result = axios
    .post('/client/login', data)
    .then(res => {
      SetToken(res.data.token);
      return true;
    })
    .catch(err => {
      console.log(JSON.stringify(err));
      return false;
    });
  return result;
};

export default LoginAPI;
