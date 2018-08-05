import React from 'react';
import ReactDOM from 'react-dom';
import { QueryRenderer, graphql } from 'react-relay';
import environment from './environment';

import App from './App';

function RootComponent() {
  const rootQuery = graphql`
    query srcRootQuery {
      random_label2: myuser(name: "Colby") {
        ...App_appUser
      }
    }
  `;

  function onRenderHelper({err, props}) {
    if (err) {
      return <div>{err.message}</div>
    } else if (props) {
      return <App appUser={props.random_label2} />
    } else {
      return <div>Loading...</div>
    }
  }

  return <QueryRenderer environment={environment} query={rootQuery} render={onRenderHelper} />;
}

ReactDOM.render(<App/>, document.getElementById("root"));
