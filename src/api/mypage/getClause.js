import axios from 'axios';
import {GetToken} from '../../utils/controlToken';

export const GetAllClause = async () => {
  try {
    const res = await axios.post('/client/company/clause/all', {
      jwtToken: await GetToken(),
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

export const GetDetailClause = async id => {
  try {
    const res = await axios.post('/client/company/clause/clauseDetail', {
      id: id,
      jwtToken: await GetToken(),
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
