const express = require('express');
const path = require('path');
// const { buildSchema } = require('graphql'); //replaced by makeExecutableSchema

const { graphqlHTTP } = require('express-graphql'); //replaced by apollo-server-express

const { ApolloServer } = require('apollo-server-express');

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

console.log(resolversArray)

const PORT = process.env.PORT || 3000;

// async function startApolloServer() {
//     const app = express();

//     const schema = makeExecutableSchema({
//         typeDefs: typesArray,
//         resolvers: resolversArray
//     });

//     //assigns the schema to the Apollo server, connecting the two.
//     const server = new ApolloServer({
//         schema,
//     });

//     //This readies the Apollo Server to accept incoming GraphQL requests.  
//     await server.start();
//     //Connecting Apollo Server to our Express app and setting the endpoint. By default the path is '/graphql', but can be assigned to anything using the path property.
//     server.applyMiddleware({ app, path: '/graphql' });

//     app.listen(PORT, () => {
//         console.log(`Running GraphQL server on port ${PORT}...`);
//     })    
// }

// startApolloServer();

const app = express();

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
});

// const schema = buildSchema(schemaText); //replaced by makeExecutableSchema

//Replaced by the Resolvers
// const root = {
//     orders: require('./orders/orders.model'),
//     products: require('./products/products.model'),
// }

//Replaced by the Apollo Server package
app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: root, //Resolvers replaced this
    graphiql: true,
}))

app.listen(PORT, () => {
    console.log(`Running GraphQL server on port ${PORT}...`);
})


