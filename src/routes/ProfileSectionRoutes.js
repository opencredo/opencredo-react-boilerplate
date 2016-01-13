import React from 'react';
import {Route, IndexRoute} from 'react-router';

// Layouts
import ProfileLayout from 'layouts/ProfileLayout/ProfileLayout';

// Pages
import ProfileEditPage from 'views/ProfileEditPage/ProfileEditPage';
import MySpacesPage from 'views/MySpacesPage/MySpacesPage';

export default (
  <Route name="profile" path="/profile" component={ProfileLayout}>
    <IndexRoute component={ProfileEditPage} />
    <Route name="my-spaces" path="spaces" component={MySpacesPage} />
  </Route>
);
