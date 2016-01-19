import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import { requireAuthentication as restrict } from 'containers/AuthenticatedComponent';

import AppLayout from 'components/AppLayout';
import HeroPageLayout from 'components/HeroPageLayout';
import AdminPageLayout from 'components/AdminPageLayout';
import LandingPage from 'pages/LandingPage/LandingPage';
import AboutPage from 'pages/AboutPage/AboutPage';
import ProfileEditPage from 'pages/ProfileEditPage/ProfileEditPage';
import AccountPage from 'pages/AccountPage/AccountPage';

export default(
  // Route components without path will render their children...
  <Route component={AppLayout}>
    // until a match is found...
    <Route component={HeroPageLayout}>
      // here
      <Route path="/" component={LandingPage} />
      // Routes without a component will render their children:
      <Route path="/pages" >
        <IndexRedirect to="about-us" />
        <Route path="about-us" component={AboutPage} />
        <Route path="faq" component={AboutPage} />
      </Route>
    </Route>

    <Route path="/account" component={AdminPageLayout}>
      <IndexRoute component={restrict(AccountPage)} />
      <Route path="/profile/edit" component={restrict(ProfileEditPage)} />
    </Route>
  </Route>
);
