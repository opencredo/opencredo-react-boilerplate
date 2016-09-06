import config from '../app-config';

export const links = {
  home: {
    to: '/',
    id: 'navigation.home',
    description: 'Go to Home / Landing Page',
    defaultMessage: config.name,
  },

  aboutUs: {
    to: '/pages/about-us',
    id: 'navigation.aboutUs',
    description: 'About Us page link',
    defaultMessage: 'About Us',
  },

  logIn: {
    id: 'navigation.logIn',
    description: 'Log in',
    defaultMessage: 'Log in',
  },

  logOut: {
    id: 'navigation.logOut',
    description: 'Log out',
    defaultMessage: 'Log out',
  },

  faq: {
    to: '/pages/faq',
    id: 'navigation.faq',
    description: 'FAQ',
    defaultMessage: 'FAQ',
  },

  policies: {
    to: '/pages/policies',
    id: 'navigation.policies',
    description: 'Policies',
    defaultMessage: 'Policies',
  },

  terms: {
    to: '/pages/terms',
    id: 'navigation.terms',
    description: 'Terms & Privacy',
    defaultMessage: 'Terms & Privacy',
  },

  help: {
    to: '/pages/help',
    id: 'navigation.help',
    description: 'Help',
    defaultMessage: 'Help',
  },

};
