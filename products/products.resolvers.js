const productsModel = require('./products.model');

module.exports = {
    Query: {
        products: () => {
            console.log('Getting products...');
            return productsModel.getAllProducts();
        },
        productsByPrice: (_, args) => {
            return productsModel.getProductsByPrice(args.min, args.max);
        },
        productById: (_, args) => {
            return productsModel.getProductById(args.id)
        }
    }
}