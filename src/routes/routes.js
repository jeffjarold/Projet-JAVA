const express = require('express');

const routes = express.Router();
const productsController = require('../controllers/ProductsController');

routes.post('/products', productsController.createProducts);
routes.get('/products', productsController.listProducts);
routes.get('/product/:id', productsController.listOneProduct);
routes.delete('/products', productsController.deleteAllProducts);
routes.delete('/product/:id', productsController.deleteProduct);
routes.put('/product/:id', productsController.updateProduct);

module.exports  = routes;
s
