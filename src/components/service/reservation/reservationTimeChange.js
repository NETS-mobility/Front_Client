import {useEffect, useState} from 'react';

const ReservationTimeChange = (time, setTime, date, setDate) => {
  if (time.resResTime.min == '40') {
    // setDate();
    setTime({
      ...time,
      resArrTime: {
        timetype: time.resResTime.timetype,
        hour: time.resResTime.hour,
        min: '20',
      },
    });
  } else if (time.resResTime.min == '20') {
    setTime({
      ...time,
      resArrTime: {
        timetype: time.resResTime.timetype,
        hour: time.resResTime.hour,
        min: '00',
      },
    });
  } else if (time.resResTime.min == '00') {
    if (time.resResTime.hour == '12' || time.resResTime.type == '오전') {
      setTime({
        ...time,
        resArrTime: {
          timetype: '오후',
          hour: '11',
          min: '40',
        },
      });

      //오전12시==자정==>자정에서 1시간 전==오후11시
      // -> date, timetype, hour, min
      // -> date도 바꿔야 함
      // ->오후로 가야 됨... 전날....
    } else if (time.resResTime.hour == '12' || time.resResTime.type == '오후') {
      setTime({
        ...time,
        resArrTime: {
          timetype: '오전',
          hour: '11',
          min: '40',
        },
      });
      // -> timetype, hour, min
      // ->오전으로만 가면 됨 (date 바꿀 필요 없음)
    } else {
      setTime({
        ...time,
        resArrTime: {
          timetype: time.resResTime.timetype,
          hour: `${parseInt(time.resResTime.hour) - 1}`,
          min: '40',
        },
      });
      // -> hour,min
      // -> 시간만 빼....
    }
  }
};

export default ReservationTimeChange;
