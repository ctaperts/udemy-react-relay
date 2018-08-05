const fs = require('fs');
const path = require('path');
const { printSchema } = require('graphql/utilities');

const Schema = require('./graphqlTypes/graphqlSchema.js');

fs.writeFileSync(
  path.join(__dirname, './schema.graphql'),
  printSchema(Schema)
);

