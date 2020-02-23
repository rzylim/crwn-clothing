import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { flowRight as compose } from "lodash";

import Header from "./header.component";

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = ({ data: { currentUser, cartHidden } }) => (
  <Header currentUser={currentUser} hidden={cartHidden} />
);

export default compose(
  graphql(GET_CURRENT_USER),
  graphql(GET_CART_HIDDEN)
)(HeaderContainer);
