import axios from 'axios';

const FindIDAPI = async data => {
  let userid;
  await axios
    .post('/client/login/findID', data)
    .then(res => {
      userid = res.data.id[0];
    })
    .catch(err => console.log(JSON.stringify(err)));
  return userid;
};

export default FindIDAPI;
