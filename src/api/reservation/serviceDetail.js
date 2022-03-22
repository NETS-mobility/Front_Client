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

// {
//     "dispatch": [
//       {
//         "car_id": 0,
//         "car_number": "string",
//         "netsmanager_id": "string",
//         "netsmanager_number": 0,
//         "netsmanager_name": "string",
//         "netsmanager_job": "string",
//         "netsmanager_intro": "string",
//         "netsmanager_tel": "string",
//         "netsmanager_mention": "string"
//       }
//     ],
//     "service_state": 0,
//     "service_state_time": [
//       "string"
//     ],
//     "service": {
//       "service_type": "string",
//       "service_id": "string",
//       "pickup_time": "string",
//       "rev_date": "string",
//       "pickup_address": "string",
//       "hos_name": "string",
//       "hos_arrival_time": "string",
//       "hos_care_time": "string",
//       "hos_depart_time": "string",
//       "netsmanager": "string",
//       "car_number": "string",
//       "gowithumanager": "string",
//       "reservation_state": 0
//     },
//     "payment": {
//       "charge": 0,
//       "extraPay": 0
//     }
//   }
