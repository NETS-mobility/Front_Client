import axios from 'axios';

const ReservationAPI = async data => {
  const {dispatch, ...filtered} = data;
  const dispatch1 = data?.dispatch?.dispatch?.[0];
  const dispatch2 = data?.dispatch?.dispatch?.[1];
  console.log('data?==', data);
  console.log('dispatch1?=', dispatch1);
  console.log('dispatch2?=', dispatch2);
  console.log('data?.dispatch?.dispatch?.[0]', data?.dispatch?.dispatch?.[0]);
  console.log('data?.dispatch?.dispatch?.[1]', data?.dispatch?.dispatch?.[1]);

  try {
    const result = await axios.post('/client/reserve', {
      data: filtered,
      dispatch1: dispatch1,
      dispatch2: dispatch2
        ? dispatch2
        : {
            netsmanagerNum: 0,
            carId: 0,
            expMoveDistance: 0,
            expMoveTime: 0,
            expCarPickupTime: '',
            expCarTerminateServiceTime: '',
          },
      file: {},
    });
    return result.data;
  } catch (err) {
    return err;
  }
};

/*
{
  "data": {
    "jwtToken": "string",
    "moveDirection": "string",
    "serviceKindId": 0,
    "gowithHospitalTime": 0,
    "pickupAddr": "string",
    "dropAddr": "string",
    "hospitalAddr": "string",
    "hopeReservationDate": "string",
    "hopeHospitalArrivalTime": "string",
    "fixedMedicalTime": "string",
    "hopeHospitalDepartureTime": "string",
    "fixedMedicalDetail": "string",
    "hopeRequires": "string",
    "patientName": "string",
    "patientPhone": "string",
    "protectorName": "string",
    "protectorPhone": "string",
    "validTargetKind": "string"
  },
  "dispatch1": {
    "netsmanagerNum": 0,
    "carId": 0,
    "expMoveDistance": 0,
    "expMoveTime": 0,
    "expCarPickupTime": "string",
    "expCarTerminateServiceTime": "string"
  },
  "dispatch2": {
    "netsmanagerNum": 0,
    "carId": 0,
    "expMoveDistance": 0,
    "expMoveTime": 0,
    "expCarPickupTime": "string",
    "expCarTerminateServiceTime": "string"
  },
  "file": {}
}


*/
export default ReservationAPI;
