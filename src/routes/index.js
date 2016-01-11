import {Route, IndexRoute} from 'react-router';
import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import LandingPage from 'views/LandingPage/LandingPage';
import AboutPage from 'views/AboutPage/AboutPage';

export default (
  <Route name="landing-page" path="/" component={CoreLayout}>
    <IndexRoute component={LandingPage} />
    <Route name="about-us" path="about" component={AboutPage} />
  </Route>
);
