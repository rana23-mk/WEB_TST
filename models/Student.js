
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Student = sequelize.define('Student', {
    student_id: { type: DataTypes.STRING, primaryKey: true },
    first_name: { type: DataTypes.STRING, allowNull: false },
    last_name: { type: DataTypes.STRING, allowNull: false },
    date_of_birth: { type: DataTypes.DATEONLY, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    enrollment_date: { type: DataTypes.DATEONLY, allowNull: false },
    courses: { type: DataTypes.JSONB, allowNull: false }
});

module.exports = Student;
    