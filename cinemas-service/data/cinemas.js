const fs = require('fs');
const path = require('path');
const cinemasFilePath = path.join(__dirname, 'cinemas.json');

const readCinemas = () => {
    const data = fs.readFileSync(cinemasFilePath);
    return JSON.parse(data);
};


module.exports = {
    readCinemas
};
