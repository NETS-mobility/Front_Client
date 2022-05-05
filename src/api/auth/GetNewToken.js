import axios from 'axios';
import {GetToken, SetToken} from '../../utils/controlToken';

const GetNewToken = async () => {
  try {
    const res = await axios.post('/client/getNewToken', {
      jwtToken: await GetToken(),
    });
    SetToken(res.data.token);
    return res.data.success;
  } catch (err) {
    return err;
  }
};

export default GetNewToken;
