import { DocumentNode, gql } from "@apollo/client";

export const GET_DESTINATIONS: DocumentNode = gql`
    query GetDestination {
        destinations {
            _id
            name
        }
    }
`