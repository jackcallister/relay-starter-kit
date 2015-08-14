import React from 'react';
import Relay from 'react-relay';
import Component from './Component';

const componentRoute = {
  queries: {

    user: Component => Relay.QL`
      query {
        user() {
          ${Component.getFragment('user')}
        }
      }
    `,
  },

  params: {},

  name: 'ComponentRoute',
};

React.render(
  <Relay.RootContainer Component={Component}
                       route={componentRoute} />,
  document.getElementById('app')
);
