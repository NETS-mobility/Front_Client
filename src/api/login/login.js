import axios from 'axios';
import {SetToken} from '../../utils/controlToken';

const LoginAPI = data => {
  axios
    .post('/client/login', data)
    .then(res => {
      SetToken(res.data.token);
    })
    .catch(err => console.log(JSON.stringify(err)));
};

export default LoginAPI;
