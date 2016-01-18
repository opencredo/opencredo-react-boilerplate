import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import AppLayout from 'components/AppLayout';
import HeroPageLayout from 'components/HeroPageLayout';
import AdminPageLayout from 'components/AdminPageLayout';

import LandingPage from 'pages/LandingPage/LandingPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import ProfileEditPage from 'pages/ProfileEditPage/ProfileEditPage';
import AccountPage from 'pages/AccountPage/AccountPage';

export default (
  <Route path="/" name="home" component={AppLayout}>
    <IndexRedirect to="/pages" />
    <Route name="pages" path="/pages" component={HeroPageLayout}>
      <IndexRoute component={LandingPage} />
      <Route name="about-us" path="about-us" component={AboutPage}/>
    </Route>
    <Route name="account" path="account" component={AdminPageLayout}>
      <IndexRoute component={AccountPage} />
      <Route name="profile-edit" path="/profile/edit" component={ProfileEditPage} />
    </Route>
  </Route>
);
