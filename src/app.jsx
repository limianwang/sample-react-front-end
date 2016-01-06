'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, Link } from 'react-router';

import Home from './components/Home';
import Login from './components/Login';

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

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
),
document.getElementById('content')
);
