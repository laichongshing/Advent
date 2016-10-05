import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import MainLayout from './components/main-layout';
import App from './components/app';
import Home from './components/home';
import EventCreateContainer from './containers/EventCreateContainer';
import EventListContainer from './containers/EventListContainer';


ReactDom.render(
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={App}/>
            <Route path="/main" component={Home} />
            <Route path="/event/create" component={EventCreateContainer} />
            <Route path="/event/list" component={EventListContainer} />
        </Route>
    </Router>
, document.querySelector('#container'));