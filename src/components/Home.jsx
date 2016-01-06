'use strict';

import React from 'react';
import AuthenticatedComponent from './Auth';

export default AuthenticatedComponent(class Home extends React.Component {
  render() {
    return (<h1>Hello {this.props.user ? this.props.user.username : '' }!!!</h1>)
  }
});
