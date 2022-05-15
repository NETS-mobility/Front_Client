import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const GetBaseCost = async id => {
  try {
    const res = await axios.post('/client/cost/baseCostDetail', {
      reservationId: id,
      jwtToken: await GetToken('accessToken'),
    });
    console.log('res=', res);
    return res.data.baseCost;
  } catch (err) {
    return err;
  }
};

export default GetBaseCost;
