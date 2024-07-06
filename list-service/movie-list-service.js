const express = require('express');
const { readMovies } = require('./data/movies');  
const router = express.Router();

router.get('/moviesList', (req, res) => {
    try {
        const movies = readMovies();
        res.json(movies);
    } catch (error) {
        res.status(500).send('Error reading movies data');
    }
});

module.exports = router;
