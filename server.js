const express = require('express');
const path = require('path');

const { graphqlHTTP } = require('express-graphql');

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const PORT = process.env.PORT || 3000;

const app = express();

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}))

app.listen(PORT, () => {
    console.log(`Running GraphQL server on port ${PORT}...`);
})


