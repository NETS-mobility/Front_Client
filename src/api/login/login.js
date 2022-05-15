import axios from 'axios';
import {SetToken} from '../../utils/controlToken';

const LoginAPI = async data => {
  return new Promise((resolve, reject) => {
    axios
      .post('/client/login', data)
      .then(res => {
        SetToken(res.data.token);
        resolve(res.status);
      })
      .catch(err => {
        console.log(JSON.stringify(err.response));
      });
  });
};

export default LoginAPI;
