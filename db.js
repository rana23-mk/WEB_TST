
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('student_management', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
    