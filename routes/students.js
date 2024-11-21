
const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Add Student
router.post('/', async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Fetch All Students
router.get('/', async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Fetch Student by ID
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update Student
router.put('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        await student.update(req.body);
        res.json(student);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete Student
router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) return res.status(404).json({ message: 'Student not found' });
        await student.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
    