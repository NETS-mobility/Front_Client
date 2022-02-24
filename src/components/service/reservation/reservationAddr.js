import React, {useEffect, useState} from 'react';
import {ServiceAddress} from './serviceInputBox';

export const HospitalAddr = ({addr, setAddr}) => {
  return (
    <ServiceAddress
      prititle={'병원'}
      exptitle={' 주소를 입력해주세요'}
      placeHolder={'병원 주소'}
      addr={addr}
      setAddr={setAddr}
      propName={'hospitalAddr'}
    />
  );
};

export const HomeAddr = ({addr, setAddr}) => {
  return (
    <ServiceAddress
      prititle={'픽업'}
      exptitle={' 주소를 입력해주세요'}
      placeHolder={'픽업 주소'}
      addr={addr}
      setAddr={setAddr}
      propName={'homeAddr'}
    />
  );
};

export const DropAddr = ({addr, setAddr}) => {
  return (
    <ServiceAddress
      prititle={'귀가'}
      exptitle={' 주소를 입력해주세요'}
      placeHolder={'귀가 주소'}
      addr={addr}
      setAddr={setAddr}
      propName={'dropAddr'}
    />
  );
};
