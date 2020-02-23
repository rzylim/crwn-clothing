import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import { flowRight as compose } from "lodash";

import Directory from "./directory.component";

const GET_SECTIONS = gql`
  {
    sections @client
  }
`;

const DirectoryContainer = ({ data: { sections } }) => (
  <Directory sections={sections} />
);

export default compose(graphql(GET_SECTIONS))(DirectoryContainer);
