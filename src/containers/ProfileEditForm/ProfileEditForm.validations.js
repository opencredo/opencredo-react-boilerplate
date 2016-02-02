export default {
  givenName: {
    required: true,
    validateOnBlur: true,
    minLength: 1,
  },
  familyName: {
    required: true,
    validateOnBlur: true,
    minLength: 2,
  },
  nickname: {
    required: false,
    validateOnBlur: true,
    maxLength: 10,
  },
  email: {
    required: true,
    email: true,
    validateOnBlur: true,
  },
  emailVerified: true,
  gender: {
    required: true,
    validateOnBlur: true,
  },
  locale: {
    required: true,
    validateOnBlur: true,
  },
  notes: {
    required: false,
    validateOnBlur: true,
  },
};
