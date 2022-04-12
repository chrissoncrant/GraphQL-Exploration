const express = require('express');
const { buildSchema } = require('graphql'); 
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`);

const root = {
    description: 'Red Shoe',
    price: 42.12,
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

