const express = require('express');
const cors = require('cors');
const expressGraphql = require('express-graphql');
const schema = require('./graphqlTypes/graphqlSchema')
const db = require('./mongoConnection');

const app = express();

app.use(cors());

app.use('/graphql', expressGraphql ({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Running CORS-enabled GraphQL API server at localhost:4000/graphql')
});
