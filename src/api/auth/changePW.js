import axios from 'axios';

const ChangePWAPI = async data => {
  try {
    const res = await axios.post('/client/login/changePw', data);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default ChangePWAPI;
