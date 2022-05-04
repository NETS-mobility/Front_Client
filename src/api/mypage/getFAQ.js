import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const GetFAQ = async () => {
  try {
    const res = await axios.post('/client/company/FAQ', {
      jwtToken: await GetToken(),
    });
    console.log(res.data);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetFAQ;
