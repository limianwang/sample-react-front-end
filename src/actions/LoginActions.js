import AppDispatcher from '../dispatchers';
import RouterContainer from '../services/RouterContainer';

export default {
  loginUser: (jwt) => {
    let savedJwt = localStorage.getItem('jwt');

    AppDispatcher.dispatch({
      actionType: 'LOGIN_USER',
      jwt: jwt
    });

    if (savedJwt !== jwt) {
      let nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

      RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('jwt', jwt);
    }
  }
}
