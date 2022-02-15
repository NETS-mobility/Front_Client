import axios from 'axios';
const SignUpAPI = async data => {
  let status;
  await axios
    .post('/client/register', data)
    .then(res => {
      console.log('api==', res.status);
      status = res.status;
    })
    .catch(err => console.log(JSON.stringify(err)));
  return status;
};

export default SignUpAPI;
