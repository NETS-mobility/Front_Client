import axios from 'axios';

const ReservationAPI = data => {
  const {dispatch, ...filtered} = data;
  const dispatch1 = data.dispatch.dispatch1;
  const dispatch2 = data.dispatch.dispatch2;
  console.log('data===', data);
  console.log('dispatch1===', dispatch1);
  console.log('data.dispatch===', data.dispatch);
  console.log('filtered===', filtered);

  const result = axios
    .post('/client/reserve', {
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
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(JSON.stringify(err)));
  return result;
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
