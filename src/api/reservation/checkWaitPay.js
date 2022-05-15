import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const CheckWaitPay = async () => {
  try {
    const res = await axios.post('/client/reserve/checkWaitPay', {
      jwtToken: await GetToken(),
    });
    console.log('res in checkwaitpay api= ', res.data);
    return res.data.reservationId;
  } catch (err) {
    console.log('err in checkwaitpay api=', err);
    return err;
  }
};
export {CheckWaitPay};
