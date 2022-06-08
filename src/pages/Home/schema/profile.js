import { gql } from '@apollo/client';

export default gql`
  query {
    profile {
      fistName
      lastName
    }
    skills {
      label
      img
    }
    works {
      label
      img
    }
  }
`;
