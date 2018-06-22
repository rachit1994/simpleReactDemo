const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

const validate = {
  required: (value) => ( value && value.length > 0 ),
  email: (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  phone: (phone) => {
    const re = /^\(\d{3}\)\s?\d{3}-\d{4}$/
    return re.test(String(phone).toLowerCase());
  },
  canadianZip: (postal) => {
    const re = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
    return re.test(postal)
  },
  password: (str) => {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(str);
  }
};

export default validate;