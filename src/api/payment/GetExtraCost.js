import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const GetExtraCost = async id => {
  try {
    const res = await axios.post('/client/cost/extraCostDetail', {
      reservationId: id,
      jwtToken: await GetToken('accessToken'),
    });
    console.log('res=', res);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetExtraCost;
