import axios from 'axios';

const ChangePWAPI = async data => {
  await axios
    .post('/client/login/changePw', data)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(JSON.stringify(err)));
};

export default ChangePWAPI;
