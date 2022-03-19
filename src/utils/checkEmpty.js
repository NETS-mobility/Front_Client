const CheckObjEmpty = obj => {
  //empty일 때 true 반환
  return obj.constructor === Object && Object.keys(obj).length === 0;
};

export {CheckObjEmpty};
