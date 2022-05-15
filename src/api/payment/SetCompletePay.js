import axios from 'axios';

const SetCompletePay = async (imp_uid, merchantUid) => {
  try {
    const res = await axios.post('/client/pay/setComplete', {
      impUid: imp_uid,
      merchantUid: merchantUid,
    });
    console.log('res in setcomplete===', res.data);
    return res.data;
  } catch (err) {
    console.log('err in setcomplete=======', err);
    console.log('err.response in setcomplete=======', err);
    return err;
  }
};

export {SetCompletePay};
