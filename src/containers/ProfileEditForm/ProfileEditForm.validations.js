export default {
  givenName: {
    required: true,
    validateOnBlur: true,
  },
  familyName: {
    required: true,
    validateOnBlur: true,
  },
  nickname: {
    required: false,
    validateOnBlur: true,
  },
  email: {
    required: true,
    email: true,
    validateOnBlur: true,
  },
  emailVerified: {
    required: true,
    validateOnBlur: true,
  },
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
