import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const GetPayInfo = async id => {
  try {
    const res = await axios.post('/client/pay/getPayInfo', {
      reservationId: id,
      jwtToken: await GetToken('accessToken'),
    });
    console.log('pay info=', res);
    return res.data;
  } catch (err) {
    console.log('err in pay info=', err.response);
    return err;
  }
};

const GetBankType = async () => {
  try {
    const res = await axios.post('/client/bankpay/getCompanyBankInfo', {
      jwtToken: await GetToken('accessToken'),
    });
    console.log('bank type===', res);
    return res.data;
  } catch (err) {
    return err;
  }
};

export {GetPayInfo, GetBankType};
