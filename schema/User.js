const Sequelize = require('sequelize');
const { db } = require('../config/db');

const User = db.define('user',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    defaultValue: 'not specified'
  },
  role: {
    type: Sequelize.STRING,
    defaultValue: 2
  },
  profile: {
    type: Sequelize.STRING,
    defaultValue: 'defaultProfile'
  }
});

User.sync({ force: false }).then((res) => {
  console.log('User Table Created');
}).catch((err) => {
  console.log('Error While Creating User Table');
})

module.exports = User;