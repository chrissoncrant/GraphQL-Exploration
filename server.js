const express = require('express');
const { buildSchema } = require('graphql'); 
const { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product {
        id: ID!
        description: String!
        price: Float!
        reviews: [Review]
    }

    type Review {
        rating: Int!
        comment: String
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem] 
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const root = {
    products: [
        {
            id: 'redshoes',
            description: 'Red Shoes',
            price: 42.12,
            reviews: [
                {
                    rating: 5,
                    comment: 'Loved the shoes!'
                },
            ]
        },
        {
            id: 'bluejean',
            description: 'Blue Jeans',
            price: 55.55
        },
    ],
    orders: [
        {
            date: '2005-05-05',
            subtotal: 90.22,
            items: [
                {
                    product: {
                        id: 'redshoes',
                        description: 'Old Red Shoes',
                        price: 35.15
                    },
                    quantity: 1,
                },
            ],
        }
    ]
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

