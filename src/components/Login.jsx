import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService';

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      user: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        alert('error');
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form role="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" valueLink={this.linkState('user')} className="form-control" id="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
        </form>
      </div>
    )
  }
}

ReactMixin(Login.prototype, LinkedStateMixin);
