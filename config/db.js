const Sequalize = require('sequelize');

exports.db = new Sequalize('Instagram', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

if (exports.db) {
    console.log("Database connection successful.");
}