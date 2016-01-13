import React from 'react';
import {Route, IndexRoute} from 'react-router';

// Layouts
import ProfileLayout from 'layouts/ProfileLayout/ProfileLayout';

// Pages
import ProfileEditPage from 'pages/ProfileEditPage/ProfileEditPage';

export default (
  <Route name="profile" path="/profile" component={ProfileLayout}>
    <IndexRoute component={ProfileEditPage} />
  </Route>
);
