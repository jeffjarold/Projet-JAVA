const Product = require('../models/Product');

module.exports = {
    async listProducts(req, res){
        try {
            const products = await Product.find().sort('-createdAt');
            
            res.status(200).send(products);
s
        } catch(error){
             res.status(500).send({ message: 'Product list error'});
        };
    },
    
    async listOneProduct(req, res){
        try {
            const id = req.params.id;
            
            const product = await Product.findOne({_id: id});
            res.status(200).send(product);

        } catch(error){
             res.status(500).send({ message: 'Product list error'});
        };
    },
    
    async createProducts(req, res){
        try {
            const product = await Product.create(req.body);

            res.status(200).send({ message: 'Product successfully created'});
            
        } catch(error){
            res.status(500).send( { message: 'Product creation error'});
        };
    },

    async deleteProduct(req, res){
        try {
            const id = req.params.id;

            await Product.findByIdAndRemove(id, null);
            res.status(200).send({message: 'Product was deleted successfully'});
            
        } catch(error){
            res.status(500).send({ message: 'Product deleted error'}); 
        };
    },

    async deleteAllProducts(req, res){
        try {
            await Product.deleteMany({});
            res.status(200).send({message: 'Products was deleted successfully'});

        } catch(error){
            res.status(500).send({ message: 'Products deleted error'});  
        };
    },

    async updateProduct(req, res){
        try {
            const id = req.params.id;

            await Product.findByIdAndUpdate(id, req.body, {new: true}, null);
            res.status(200).send({ message: "Product was update successfully"});
            
        } catch(error){
            res.status(500).send({ message: `Error updating product with id = ${id}`});
        };
    }
};

