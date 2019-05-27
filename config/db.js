const Sequalize = require('sequelize');

////////// Setup Server ////////////
const DATABASE_NAME = 'Instagram';
const USERNAME      = 'root';
const PASSWORD      = '';
const HOSTNAME      = 'localhost';
const PORT          = 3333;
const DB_TYPE       = 'mysql'
/////////////////////////////////////

exports.db = new Sequalize(DATABASE_NAME, USERNAME, PASSWORD, {
    host: HOSTNAME,
    port: PORT,
    dialect: DB_TYPE,
});

if (exports.db) {
    console.log("Database connection successful.");
}