import React from 'react';
import Relay from 'react-relay';

class Component {

  render() {
    console.log(this.props);

    return <h1>Hello, World</h1>;
  }
}

export default Relay.createContainer(Component, {
  // For each of the props that depend on server data, we define a corresponding
  // key in `fragments`. Here, the component expects server data to populate the
  // `user` prop, so we'll specify the fragment from above as `fragments.user`.
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        name
      }
    `,
  },
});
