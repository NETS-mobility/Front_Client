import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const CheckEmailDupAPI = async (email, setSuccess) => {
  await axios
    .post('/client/mypage/changeInfo/checkDup', {
      jwtToken: await GetToken(),
      id: email,
    })
    .then(res => {
      if (res.data.isDup == false) setSuccess(2);
      else setSuccess(1);
    })
    .catch(err => setSuccess(1));
};

export default CheckEmailDupAPI;
