const products = require('../products.json');

const getProduct = (req, res,) => {
    // find returns item or undefined if not found
    // filter returns an empty array if nothing found which will still be truthy
    // it returns an array of objects if it finds anything 
    const item = products.filter(product => product.id == +req.params.id);
    console.log(item);
    if (item.length === 0) {
        return res.status(500).send("Item not in list");
    } else {
        res.status(200).send(item);
    }
}

module.exports = getProduct;