const Category = require('../models/category.model');

exports.createCategory = (req, res) => {
    const { descripcion } = req.body;
    const categoria = new Category(descripcion);

    Category.create(categoria, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(200).send({
                status: "success",
                data: {
                    data
                }
            });
        }
    });
};

exports.allCategory = (req, res) => {
    
    Category.allCategory((err, data) => {
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
exports.findByCategory = (req, res) => {
    const { id } = req.params;

    Category.findByCategory(id, (err, data) => {
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
exports.deleteCategory = (req, res) => {
    const { id } = req.params;

    Category.deleteCategory(id, (err, data) => {
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

// exports.signin = (req, res) => {
//     const { email, password } = req.body;
//     console.log(req.body)
//     User.findByEmail(email.trim(), (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     status: 'error',
//                     message: `Usurio con email  ${email} no fue encontrado`
//                 });
//                 return;
//             }
//             res.status(500).send({
//                 status: 'error',
//                 message: err.message
//             });
//             return;
//         }
//         console.log(data)
//         if (data) {
//             console.log(data.password)
//             if (comparePassword(password.trim(), data.password)) {

//                 const token = generateToken(data.id);
//                 res.status(200).send({
//                     status: 'success',
//                     data: {
//                         token,
//                         username: data.username,
//                         // firstname: data.firstname,
//                         // lastname: data.lastname,
//                         email: data.email
//                     }
//                 });
//                 return;
//             }
//             res.status(401).send({
//                 status: 'error',
//                 message: 'Contraseña es incorrecta'
//             });
//         }
//     });

// }