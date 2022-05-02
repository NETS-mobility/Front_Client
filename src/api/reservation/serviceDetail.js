import axios from 'axios';

const GetServiceDetail = async service_id => {
  try {
    const res = await axios.post(
      `/client/service/serviceDetail/${service_id}`,
      {
        service_id: service_id,
      },
    );
    return res.data;
  } catch (err) {
    return err;
  }
};

export default GetServiceDetail;
