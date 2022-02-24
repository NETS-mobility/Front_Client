import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const GetUserInfo = async () => {
  const result = await axios
    .post('/client/mypage', {jwtToken: await GetToken().then(res => res)})
    .then(res => res.data)
    .catch(err => err);
  return result;
};
export default GetUserInfo;
