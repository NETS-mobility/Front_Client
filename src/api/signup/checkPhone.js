import axios from 'axios';

const CheckPhoneAPI = async (data, setRes) => {
  await axios
    .post('/client/register/checkPhone', data)
    .then(res => {
      setRes(res.data.randomNumber.randomNumber);
    })
    .catch(err => console.log(JSON.stringify(err)));
};

export default CheckPhoneAPI;
