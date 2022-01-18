const PhoneValidation = tel => {
  return /^\d{3}-\d{3,4}-\d{4}$/.test(tel);
};

export {PhoneValidation};
