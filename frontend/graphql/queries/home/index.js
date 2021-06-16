import { gql } from "@apollo/client";

export const QueryUsers = gql`
  query getUsers {
    getUsers {
      name
      age
    }
  }
`;
