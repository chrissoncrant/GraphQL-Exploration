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
        price: 55.55,
        reviews: []
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

function addNewProduct(id, description, price) {
    const newProduct = {
        id, 
        description,
        price,
        reviews: []
    };
    products.push(newProduct)
    return newProduct;
}

function createProductReview(id, rating, comment) {
    const product = getProductById(id);
    const review = {
        rating, 
        comment
    };
    console.log(product);
    product.reviews.push(review);
    console.log(product);
    return review;
}   

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    createProductReview
}