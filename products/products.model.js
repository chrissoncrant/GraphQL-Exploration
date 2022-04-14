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

function getProductsByPrice(min, max) {
    return products.filter(product => product.price >= min && product.price <= max);
}

function getProductById(id) {
    return products.find(product => {
        return product.id === id;
    })
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById
}