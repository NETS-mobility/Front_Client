import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const ChangeUserInfo = async (name, email, phone, setSucceed) => {
  await axios
    .post('/client/mypage/changeInfo', {
      jwtToken: await GetToken(),
      user_name: name,
      user_newId: email,
      user_phone: phone,
    })
    .then(res => {
      if (res.status == 200) {
        setSucceed(2);
      } else {
        setSucceed(1);
      }
    })
    .catch(err => setSucceed(1));
};

export default ChangeUserInfo;
