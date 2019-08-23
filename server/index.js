const express = require('express');
const app = express();
const products = require('../products.json');

const port = 2020;

app.get('/api/products', (req, res,) => {
    res.status(200).send(products);
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});