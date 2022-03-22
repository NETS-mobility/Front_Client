import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const GetHomeInfo = async () => {
  try {
    const res = await axios.post('/client', {jwtToken: await GetToken()});
    return res.data;
  } catch (err) {
    return err;
  }
};
export default GetHomeInfo;
