import { gql } from "@apollo/client";

export const QueryCoffees = gql`
  query getAllCoffees {
    getAllCoffees {
      id
      name
      price
      type
      img
      description
      ingredients
    }
  }
`;
