
const express = require('express');
const sequelize = require('./db');
const studentRoutes = require('./routes/students');

const app = express();
app.use(express.json());
app.use('/api/students', studentRoutes);

(async () => {
    try {
        await sequelize.sync();
        console.log('Database connected!');
        app.listen(4000, () => console.log('Server running at http://localhost:4000'));
    } catch (err) {
        console.error('Failed to connect to the database:', err);
    }
})();
    