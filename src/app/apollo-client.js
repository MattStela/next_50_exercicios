import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/', // Endpoint da API GraphQL pública da Countries
  cache: new InMemoryCache(),
});

export default client;
