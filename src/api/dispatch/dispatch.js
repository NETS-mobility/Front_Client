import axios from 'axios';

const DispatchAPI = async data => {
  console.log(
    'dispatchAPI start=================================================',
  );
  const response = await axios
    .post('/dispatch', data)
    .then(res => {
      console.log('success==', res);
      console.log(res.data);
      return res.data;
    })
    .catch(err => {
      console.log('catch error===', JSON.stringify(err));
      return err;
    });
  console.log(
    'dispatchAPI end=================================================',
  );
  return response;
};

export default DispatchAPI;
