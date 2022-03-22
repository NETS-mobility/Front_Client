import axios from 'axios';

const FindIDAPI = async data => {
  try {
    const res = await axios.post('/client/login/findID', data);
    console.log('res==', res.data.id);
    return res.data.id;
  } catch (err) {
    return err;
  }
  // let userid;
  // await axios
  //   .post('/client/login/findID', data)
  //   .then(res => {
  //     userid = res.data.id[0];
  //     return userid;
  //   })
  //   .catch(err => console.log(JSON.stringify(err)));
};

export default FindIDAPI;
