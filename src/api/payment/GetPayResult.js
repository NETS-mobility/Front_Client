import axios from 'axios';
const GetPayResult = async (imp_uid, token) => {
  try {
    const res = await axios.get(`https://api.iamport.kr/payments/${imp_uid}`, {
      headers: {Authorization: token},
    });
    console.log('pay result=======', res);
    return res;
  } catch (err) {
    console.log('err=======', err);
    return err;
  }
};

export default GetPayResult;
