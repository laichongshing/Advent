import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import MainLayout from './components/main-layout';
import App from './components/app';
import Home from './components/home';

import ScheduleAddEvent from './components/schedule-add-event';
import SignIn from './components/sign-in';

import auth from './auth';


function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

ReactDom.render(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={App}  onEnter={requireAuth}/>
            <Route path="/login" component={SignIn}/>
            <Route path="/main" component={Home} />
            <Route path="/schedule/addevent" component={ScheduleAddEvent}/>
        </Route>
    </Router>
, document.querySelector('.container'));
