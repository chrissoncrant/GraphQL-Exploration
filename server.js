const express = require('express');
const path = require('path');
// const { buildSchema } = require('graphql'); //replaced by makeExecutableSchema
const { graphqlHTTP } = require('express-graphql');

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
})

// const schema = buildSchema(schemaText); //replaced by makeExecutableSchema

//Replaced by the Resolvers
// const root = {
//     orders: require('./orders/orders.model'),
//     products: require('./products/products.model'),
// }

PORT = process.env.PORT || 3000;

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: root, //Resolvers replaced this
    graphiql: true,
}))

app.listen(PORT, () => {
    console.log(`Running GraphQL server on port ${PORT}...`);
})

