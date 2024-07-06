const express = require('express');
const bodyParser = require('body-parser');
const moviesRouter = require('./movie-list-service');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());


app.use('/api', moviesRouter);

app.listen(3003, () => {
    console.log('Movies Listing Service running on port 3003');
});