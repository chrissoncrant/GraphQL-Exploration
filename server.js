const express = require('express');
const path = require('path');
// const { buildSchema } = require('graphql'); //replaced by makeExecutableSchema
const { graphqlHTTP } = require('express-graphql');

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const schema = makeExecutableSchema({
    typeDefs: typesArray
})

// const schema = buildSchema(schemaText); //replaced by makeExecutableSchema

const root = {
    orders: require('./orders/orders.model'),
    products: require('./products/products.model'),
}

PORT = process.env.PORT || 3000;

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(PORT, () => {
    console.log(`Running GraphQL server on port ${PORT}...`);
})

