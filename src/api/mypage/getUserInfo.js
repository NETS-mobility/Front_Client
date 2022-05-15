import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const GetUserInfo = async () => {
  console.log(await GetToken());
  try {
    const res = await axios.post('/client/mypage', {
      jwtToken: await GetToken().then(res => res),
    });
    return res.data;
  } catch (err) {
    return err.response.status;
  }
};

export default GetUserInfo;
