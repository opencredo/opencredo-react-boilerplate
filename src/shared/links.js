import config from 'app-config';

export const links = {
  home: {
    to: '/',
    id: 'navigation_home',
    description: 'Go to Home / Landing Page',
    defaultMessage: config.name,
  },

  aboutUs: {
    to: '/',
    id: 'navigation_about_us',
    description: 'About Us page link',
    defaultMessage: 'About Us',
  },

  login: {
    id: 'navigation_login',
    description: 'Login',
    defaultMessage: 'Login',
  },

  faq: {
    to: '/pages/faq',
    id: 'navigation_faq',
    description: 'FAQ',
    defaultMessage: 'FAQ',
  },

  policies: {
    to: '/pages/policies',
    id: 'navigation_policies',
    description: 'Policies',
    defaultMessage: 'Policies',
  },

  terms: {
    to: '/pages/terms',
    id: 'navigation_terms',
    description: 'Terms & Privacy',
    defaultMessage: 'Terms & Privacy',
  },

  help: {
    to: '/pages/help',
    id: 'navigation_help',
    description: 'Help',
    defaultMessage: 'Help',
  },

};
