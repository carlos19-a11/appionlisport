const { DB_NAME } = require('../utils/secrets')

const createDB = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;

const dropDB = `DROP DATABASE IF EXISTS ${DB_NAME}`;

const createTableUSers = `
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NULL,
    lastname VARCHAR(50) NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_on TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
)
`;

const createNewUser = `
INSERT INTO users VALUES(null, ?, ?, ?, ?, ?, ?, ?, NOW())
`;


const findUserByEmailQuery = `
SELECT * FROM users WHERE email = ?
`;
const findByUsernameQuery = `
SELECT * FROM users WHERE username = ?
`;

const createNewCategory = `INSERT INTO categorias VALUES (null, ?)`;
const findCategoryById = `SELECT * FROM categorias WHERE categoria_id = ?`;
const deleteCategory = `DELETE FROM categorias WHERE categoria_id = ?`;
const allCategory = `SELECT * FROM categorias`;


const createNewCategoryQuery = `INSERT INTO  categorias VALUES (null, ?);   `;

module.exports = {
    createDB,
    dropDB,
    createTableUSers,
    createNewUser,
    findUserByEmailQuery,
    findByUsernameQuery,
    createNewCategory,
    findCategoryById,
    allCategory,
    deleteCategory
};

