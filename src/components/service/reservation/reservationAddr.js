import React, {useState} from 'react';
import {ServiceAddress} from './serviceInputBox';

export const HospitalAddr = () => {
  const [hosaddr, setHosaddr] = useState('');
  const [hosdetail, setHosdetail] = useState('');
  return (
    <ServiceAddress
      prititle={'병원'}
      exptitle={' 주소를 입력해주세요'}
      placeHolder={'병원 주소'}
      Text1={hosaddr}
      setText1={setHosaddr}
      Text2={hosdetail}
      setText2={setHosdetail}
    />
  );
};

export const HomeAddr = () => {
  const [pickaddr, setPickaddr] = useState('');
  const [pickdetail, setPickdetail] = useState('');
  return (
    <ServiceAddress
      prititle={'픽업'}
      exptitle={' 주소를 입력해주세요'}
      placeHolder={'픽업 주소'}
      Text1={pickaddr}
      setText1={setPickaddr}
      Text2={pickdetail}
      setText2={setPickdetail}
    />
  );
};

export const DropAddr = () => {
  const [dropaddr, setDropaddr] = useState('');
  const [dropdetail, setDropdetail] = useState('');
  return (
    <ServiceAddress
      prititle={'귀가'}
      exptitle={' 주소를 입력해주세요'}
      placeHolder={'귀가 주소'}
      Text1={dropaddr}
      setText1={setDropaddr}
      Text2={dropdetail}
      setText2={setDropdetail}
    />
  );
};
