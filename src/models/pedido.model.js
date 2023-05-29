const db = require('../config/db.config');
const { addProductShop: addCarShopQuery} = require('../database/queries');
const { logger } = require('../utils/logger');

class Pedido {
    constructor(usuario_id, producto_id, cantidad) {
        this.usuario_id = usuario_id;
        this.producto_id = producto_id;
        this.cantidad = cantidad;
    }

    
    // static findByProducts(id, cb) {
    //     db.query(findByProductsQuery, id, (err, res) => {
    //         if (err) {
    //             logger.error(err.message);
    //             cb(err, null);
    //             return;
    //         }
    //         if (res.length) {
    //             cb(null, res[0]);
    //             return;
    //         }
    //         cb({ kind: "not_found" }, null);
    //     })
    // }
    static addProductoShop(newUser, cb) {
        console.log(newUser);
        db.query(addCarShopQuery, 
            [
                newUser.producto_id,
                newUser.usuario_id,
                newUser.cantidad
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    usuario_id: newUser.usuario_id,
                    categoria_id: newUser.producto_id,
                    cantidad: newUser.cantidad
                });
        });
    }

}

module.exports = Pedido;