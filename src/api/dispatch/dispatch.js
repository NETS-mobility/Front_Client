import axios from 'axios';

const DispatchAPI = async data => {
  await axios
    .post('/dispatch', data)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(JSON.stringify(err)));
};

export default DispatchAPI;
