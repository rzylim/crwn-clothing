import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { flowRight as compose } from "lodash";

import App from "./App";

const SET_CURRENT_USER = gql`
  mutation SetCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const AppContainer = ({ data: { currentUser }, setCurrentUser }) => (
  <App
    currentUser={currentUser}
    setCurrentUser={user => {
      setCurrentUser({ variables: { user } });
    }}
  />
);

export default compose(
  graphql(GET_CURRENT_USER),
  graphql(SET_CURRENT_USER, { name: "setCurrentUser" })
)(AppContainer);
