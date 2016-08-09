import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Home from './components/homePage';
import Dashboard from './components/dashboard';

ReactDom.render((<Router history={browserHistory} >
                 <Route path='/login' component={Home}/>
                 <Route path='/' component={Home}/>
                 <Route path='/dashboard' component={Dashboard}/>
                 </Router>),document.getElementById('app'));
