const express = require('express');
const path = require('path');

const { ApolloServer } = require('apollo-server-express');

const { makeExecutableSchema } = require('@graphql-tools/schema');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

const PORT = process.env.PORT || 3000;

async function startApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });

    //assigns the schema to the Apollo server, connecting the two.
    const server = new ApolloServer({
        schema,
    });

    //This readies the Apollo Server to accept incoming GraphQL requests.  
    await server.start();
    //Connecting Apollo Server to our Express app and setting the endpoint. By default the path is '/graphql', but can be assigned to anything using the path property.
    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(PORT, () => {
        console.log(`Running GraphQL server on port ${PORT}...`);
    })    
}

startApolloServer();



