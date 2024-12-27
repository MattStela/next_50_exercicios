const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { getDataFromTree } = require('@apollo/client/react/ssr');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { ApolloProvider, ApolloClient, InMemoryCache, SchemaLink } = require('@apollo/client');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const Home = require('./app/exercicios/exercicio_20/page').default;

// Defina seu esquema GraphQL
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Defina seus resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

// Crie o esquema executável
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Configure o Apollo Server
const server = new ApolloServer({ schema });

const app = express();
server.start().then(() => {
  server.applyMiddleware({ app });

  app.use(express.static('public'));

  app.get('*', (req, res) => {
    const client = new ApolloClient({
      ssrMode: true,
      link: new SchemaLink({ schema }),
      cache: new InMemoryCache(),
    });

    const App = (
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    );

    getDataFromTree(App).then(() => {
      const content = renderToString(App);
      const initialState = client.extract();

      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR com Apollo Server</title>
            <script>window.__APOLLO_STATE__=${JSON.stringify(initialState).replace(/</g, '\\u003c')}</script>
          </head>
          <body>
            <div id="root">${content}</div>
          </body>
        </html>
      `;

      res.status(200).send(html);
    }).catch(error => {
      console.error('Error during SSR:', error);
      res.status(500).send('Internal Server Error');
    });
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
