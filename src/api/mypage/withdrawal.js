import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const WithdrawalAPI = async (email, password, reason) => {
  try {
    const res = await axios.post('/client/withdrawal', {
      jwtToken: await GetToken().then(res => res),
      id: email,
      password: password,
      drop_reason: reason,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export default WithdrawalAPI;
