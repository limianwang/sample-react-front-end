import request from 'reqwest';
import when from 'when';
import LoginActions from '../actions/LoginActions';

class AuthService {
  login(username, password) {
    return this._login(username, password)
      .then(function(response) {
        let jwt = response.token;

        LoginActions.loginUser(jwt);

        return true;
      });
  }

  _login(username, password) {
    return new Promise((resolve, reject) => {
      request({
        url: 'http://localhost:3001/login',
        method: 'POST',
        crossOrigin: false,
        type: 'json',
        data: {
          username, password
        },
        success: (resp) => {
          resolve(resp);
        },
        error: (err) => {
          reject(err);
        }
      })
    })
  }
}

export default new AuthService()
