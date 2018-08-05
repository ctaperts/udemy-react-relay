import React, { Component } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

class Home extends Component {
  render() {
    const { user } = this.props.userToGreet;

    return (
      <div>
        <h1> Welcome { user.name } </h1>
        <div> Your ID is: { user.id } </div>
      </div>
    )
  }
}

export default createFragmentContainer(
  Home,
  graphql`
    fragment Home_userToGreet on Viewer {
      user {
        name
        id
      }
    }
  `
);
