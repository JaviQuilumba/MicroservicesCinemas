const express = require('express');
const bodyParser = require('body-parser');
const cinemasRouter = require('./cinema-list-service');

const app = express();
app.use(bodyParser.json());

app.use('/api', cinemasRouter);

app.listen(3005, () => {
    console.log('Cinemas Listing Service running on port 3005');
});