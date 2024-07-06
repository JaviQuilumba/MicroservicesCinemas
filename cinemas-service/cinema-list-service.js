const express = require('express');
const { readCinemas } = require('./data/cinemas');  
const router = express.Router();

router.get('/cinemas', (req, res) => {
    try {
        const cinemas = readCinemas();
        res.json(cinemas);
    } catch (error) {
        res.status(500).send('Error reading cinemas data');
    }
});

module.exports = router;
