import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject} from '@apollo/client';

export const APOLLO_CLIENT: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache(),
});