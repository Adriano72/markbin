import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import { Bins } from '../imports/collections/bins';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
)

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});
