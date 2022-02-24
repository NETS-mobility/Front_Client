import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

const ReservationAPI = data => {
  const result = axios
    .post('/client/reserve', data)
    .then(res => console.log(res.data))
    .catch(err => console.log(JSON.stringify(err)));
  return result;
};

export default ReservationAPI;
