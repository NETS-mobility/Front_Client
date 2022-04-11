const ToKoreanTime = beforeConvert => {
  const beforeConvertTime = new Date(beforeConvert);
  const utc =
    beforeConvertTime.getTime() +
    beforeConvertTime.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const convertedTime = new Date(utc + KR_TIME_DIFF);
  return convertedTime;
};

export default ToKoreanTime;
