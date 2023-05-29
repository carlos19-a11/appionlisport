const Products = require('../models/products.model');
const Pedido = require('../models/pedido.model');
// const uploadFile = require('../middlewares/upload')
const fs = require('fs')


exports.allProducts = (req, res) => {
    
    
    Products.allProducts((err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(200).send({
                status: "success",
                data: data
            });
        }
    });
};
exports.findByProducts = (req, res) => {
    const { id } = req.params;
    console.log(id)

    Products.findByProducts(id, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(200).send({
                status: "success",
                data: data
            });
        }
    });
};


exports.addProductoShop = (req, res) => {
    const { usuario_id, producto_id, cantidad } = req.body;
    console.log(usuario_id, producto_id, cantidad)
    
    const addProduto = new Pedido(usuario_id, producto_id, cantidad);
    console.log(addProduto)


    Pedido.addProductoShop(addProduto, (err, data) => {
        
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(200).send({
                status: "success",
                data: data
            });
        }
    });
};