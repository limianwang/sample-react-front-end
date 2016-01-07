'use strict';
import React from 'react';
import ReactMixin from 'react-mixin'
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, Link, browserHistory } from 'react-router';

import Home from './components/Home';
import Login from './components/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Menu</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/accounts">Account</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
};

class Account extends React.Component {
  constructor() {
    super();

    this.state = {
      email: ''
    };
  }

  findAccount(e) {
    e.preventDefault();

    console.log("attempting to find:", this.state.email);
  }

  render() {
    return (
      <div>
        <h1>Find Account</h1>
        <form role="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" valueLink={this.linkState('email')} className="form-control" id="email" ref="email" placeholder="Enter Email" required />
          </div>
          <button type="submit" className="btn btn-default" onClick={this.findAccount.bind(this)}>Find</button>
        </form>
      </div>
    );
  }
};

ReactMixin(Account.prototype, LinkedStateMixin);

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="accounts" component={Account} />
    </Route>
  </Router>
),
document.getElementById('content')
);
