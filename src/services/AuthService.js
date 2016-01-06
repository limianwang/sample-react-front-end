import request from 'reqwest';
import when from 'when';
import LoginActions from '../actions/LoginActions';

class AuthService {
  login(username, password) {
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
          console.log(resp);
          resolve(resp);
        },
        error: (err) => {
          console.log(err);
          reject(err);
        }
      })
    })
  }

  handleAuth(loginPromise) {
    return loginPromise
      .then(function(response) {
        let jwt = response.id_token;

        LoginActions.loginUser(jwt);

        return true;
      });
  }
}

export default new AuthService()
