const express = require('express');
const Driver = require('../models/driver'); // Import the model
const router = express.Router();

// Get all drivers
router.get('/', async (req, res) => {
    try {
        const drivers = await Driver.findAll();
        res.status(200).json(drivers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching drivers', error });
    }
});

// Get a driver by ID
router.get('/:id', async (req, res) => {
    try {
        const driver = await Driver.findByPk(req.params.id);
        if (!driver) {
            return res.status(404).json({ message: 'Driver not found' });
        }
        res.status(200).json(driver);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching driver', error });
    }
});

// Create a new driver
router.post('/', async (req, res) => {
    try {
        const newDriver = await Driver.create(req.body);
        res.status(201).json(newDriver);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating driver', error });
    }
});

// Update a driver
router.put('/:id', async (req, res) => {
    try {
        const driver = await Driver.findByPk(req.params.id);
        if (!driver) {
            return res.status(404).json({ message: 'Driver not found' });
        }
        await driver.update(req.body);
        res.status(200).json(driver);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating driver', error });
    }
});

// Delete a driver
router.delete('/:id', async (req, res) => {
    try {
        const driver = await Driver.findByPk(req.params.id);
        if (!driver) {
            return res.status(404).json({ message: 'Driver not found' });
        }
        await driver.destroy();
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting driver', error });
    }
});

module.exports = router;
