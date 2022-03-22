import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const GetUserInfo = async () => {
  console.log(await GetToken());
  try {
    const res = await axios.post('/client/mypage', {
      jwtToken: await GetToken().then(res => res),
    });
    console.log(await GetToken());
    console.log('res=', res);
    return res.data;
  } catch (err) {
    console.log('err=', err);
    return err;
  }

  // const result = await axios
  //   .post('/client/mypage', {jwtToken: await GetToken().then(res => res)})
  //   .then(res => {
  //     console.log('res==', res);
  //     return res.data;
  //   })
  //   .catch(err => err);
  // return result;
};
export default GetUserInfo;
