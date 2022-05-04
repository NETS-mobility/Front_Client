import axios from 'axios';
import {GetToken} from '../../utils/controlToken';
const ViewAlarm = async () => {
  try {
    const res = await axios.get('/client/view_alarm/alarmList', {
      jwtToken: await GetToken(),
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
export default ViewAlarm;
