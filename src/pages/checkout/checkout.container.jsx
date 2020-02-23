import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { flowRight as compose } from "lodash";

import CheckoutPage from "./checkout.component";

const GET_CART_ITEMS_AND_CART_TOTAL = gql`
  {
    cartItems @client
    cartTotal @client
  }
`;

const CheckoutPageContainer = ({ data: { cartItems, cartTotal } }) => (
  <CheckoutPage cartItems={cartItems} total={cartTotal} />
);

export default compose(graphql(GET_CART_ITEMS_AND_CART_TOTAL))(
  CheckoutPageContainer
);
