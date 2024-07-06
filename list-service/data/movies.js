const fs = require('fs');
const path = require('path');
const moviesFilePath = path.join(__dirname, 'movies.json');

const readMovies = () => {
    const data = fs.readFileSync(moviesFilePath);
    return JSON.parse(data);
};


module.exports = {
    readMovies
};
