'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Home from './components/Home';
import Login from './components/Login';

import { IndexRoute } from 'react-router';
const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})


const Dashboard = React.createClass({
  render() {
    return <div>Welcome william!</div>
  }
});

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
),
document.getElementById('content')
);
