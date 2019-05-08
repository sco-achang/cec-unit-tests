// SSN
export function validateSSN(str) {
  const ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
  return ssnPattern.test(str);
}

// UEID
export function validateUEID(str) {
  // '\-?': optional 'hyphen' after set number of digits
  const ssnPattern = /^[0-9]{4}\-?[0-9]{4}\-?[0-9]{1}$/;
  return ssnPattern.test(str);
}
