import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const GetServiceDetail = async service_id => {
  try {
    const res = await axios.post(
      `/client/service/serviceDetail/${service_id}`,
      {
        service_id: service_id,
        jwtToken: await GetToken(),
      },
    );
    console.log('data!', res.data);
    return res.data;
  } catch (err) {
    console.log('err!=', err);
    return err.response.status;
  }
};

export default GetServiceDetail;
