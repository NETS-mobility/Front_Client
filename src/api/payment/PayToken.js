import axios from 'axios';

const PayToken = async () => {
  try {
    const res = await axios.post('https://api.iamport.kr/users/getToken', {
      imp_key: '3320333668068728',
      imp_secret:
        '70a48c04e91d0d457f1ed3a9464e1537a0207ff633d9cb71d2d81ba8236aa2c772cd72a5dd06a458',
    });
    console.log('res=', res);
    return res.data.response.access_token;
  } catch (err) {
    console.log('err in PayToken', err);
    return err;
  }
};

export {PayToken};
