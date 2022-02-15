import axios from 'axios';

const CheckDupAPI = (email, setSuccess) => {
  axios
    .post('/client/register/checkDup', {id: email})
    .then(res => setSuccess(2))
    .catch(err => setSuccess(1));
};

export default CheckDupAPI;
