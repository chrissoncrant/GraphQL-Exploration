const orders = [
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
];

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders
}