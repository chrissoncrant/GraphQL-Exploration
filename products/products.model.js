const products = [
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
];

function getAllProducts() {
    return products;
}

module.exports = {
    getAllProducts
}