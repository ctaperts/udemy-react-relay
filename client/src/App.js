import React, { Component } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

import Home from './Home';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div>
        <Home userToGreet={this.props.appUser} />
        <Card />
      </div>
    )
  }
}

export default createFragmentContainer( App, {
  appUser: graphql`
    fragment App_appUser on Viewer {
      ...Home_userToGreet
    }
  `
}
);
