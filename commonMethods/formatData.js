// YYYY/MM/DD
export function fullDate(date) {
  const dateArr = date.split('');
  const len = dateArr.length;
  if (len < 8) return date;
  // full-date String has to be of length 8
  if (len === 8) {
    for (let i = 0; i < len; i++) {
      if (i === 3) dateArr[i] += '/';
      if (i === 5) {
        dateArr[i] += '/';
        break;
      }
    }
  }
  return dateArr.join('');
}

// DD/MM/YYYY
export function effDate(date) {
  const dateArr = date.split('');
  const len = dateArr.length;

  // full-date String has to be of length 8
  if (len === 8) {
    for (let i = 0; i < len; i++) {
      if (i === 1) dateArr[i] += '/';
      if (i === 3) {
        dateArr[i] += '/';
        break;
      }
    }
  }
  return dateArr.join('');
}

export function dashPositionNumber(posNumber) {
  const posNumberArr = posNumber.split('');
  const len = posNumberArr.length;

  // full-date String has to be of length 8
  if (typeof posNumber === 'string' && len === 13) {
    for (let i = 0; i < len; i++) {
      if (i === 2) posNumberArr[i] += '-';
      if (i === 5) posNumberArr[i] += '-';
      if (i === 9) {
        posNumberArr[i] += '-';
        break;
      }
    }
  }
  return posNumberArr.join('');
}

// MM/DD/YY
export function shortFullDate(payPeriod) {
  const dateArr = payPeriod.split('');
  const len = dateArr.length;

  // full-date String has to be of length 8
  if (len === 6) {
    for (let i = 0; i < len; i++) {
      if (i === 1) dateArr[i] += '/';
      if (i === 3) {
        dateArr[i] += '/';
        break;
      }
    }
  }
  return dateArr.join('');
}

// YYYY/MM OR MM/YY
export function shortDate(payPeriod, reverse) {
  const dateArr = payPeriod.split('');
  const len = dateArr.length;

  // Date Format:YYYY/MM
  if (len === 6) {
    for (let i = 0; i < len; i++) {
      if (i === 3) {
        dateArr[i] += '/';
        break;
      }
    }
  }
  // Date Format: MM/YY OR MM/DD OR YY/MM
  if (len === 4) {
    for (let i = 0; i < len; i++) {
      if (i === 1) {
        dateArr[i] += '/';
        break;
      }
    }
  }
  return (reverse) ? dateArr.join('').split('/').reverse().join('/') : dateArr.join('');
}

// Warrant: ##-######
export function warrantData(warrant) {
  const warrantArr = warrant.split('');
  const len = warrantArr.length;

  if (typeof warrant === 'string' && len === 8) {
    for (let i = 0; i < len; i++) {
      if (i === 1) {
        warrantArr[i] += '-';
        break;
      }
    }
  }
  return warrantArr.join('');
}

export function isInteger(str) {
  if (str === '-') return true;

  const pattern = /^\s*(\+|-)?\d+\s*$/;
  return String(str).search(pattern) !== -1;
}

// ex: 1234-5678-9
export function dashUeid(ueid) {
  if (ueid.length === 9) {
    const ueidArr = ueid.split('');
    ueidArr[3] += '-';
    ueidArr[7] += '-';
    return ueidArr.join('');
  }
  return ueid;
}

/**
 * Auto-Dash Dynamically
 */
export function autoDashUEID(ueid) {
  let val = ueid.replace(/\D/g, '');
  let newVal = '';

  if (val.length <= 4) return val;
  if ((val.length > 4) && (val.length < 9)) {
    newVal += `${val.substr(0, 4)}-`;
    val = val.substr(4);
  } if (val.length > 8) {
    newVal += `${val.substr(0, 4)}-`;
    newVal += `${val.substr(4, 4)}-`;
    val = val.substr(8);
  }
  newVal += val;
  return newVal;
}

// ex: 1234-5678-9
export function autoDashSSN(ssn) {
  let val = ssn.replace(/\D/g, '');
  let newVal = '';

  if (val.length <= 3) return val;
  if ((val.length > 3) && (val.length < 6)) {
    newVal += `${val.substr(0, 3)}-`;
    val = val.substr(3);
  } if (val.length > 5) {
    newVal += `${val.substr(0, 3)}-`; // indices: [0-2]
    newVal += `${val.substr(3, 2)}-`; // indices: [3-4]
    val = val.substr(5); // [5-rest] OR LAST 4 digits
  }

  newVal += val;
  return newVal;
}
