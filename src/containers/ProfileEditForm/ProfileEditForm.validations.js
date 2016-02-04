export default {
  age: {
    required: true,
    min: 18,
    max: 99,
  },
  email: {
    required: true,
    email: true,
    validateOnBlur: true,
  },
  emailVerified: true,
  familyName: {
    required: true,
    validateOnBlur: true,
    minLength: 2,
  },
  gender: {
    required: true,
    validateOnBlur: true,
  },
  givenName: {
    required: true,
    validateOnBlur: true,
    minLength: 1,
  },
  locale: {
    required: true,
    validateOnBlur: true,
  },
  nickname: {
    required: false,
    validateOnBlur: true,
    maxLength: 10,
  },
  notes: {
    required: false,
    validateOnBlur: true,
  },
};
