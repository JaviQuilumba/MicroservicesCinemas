const express = require('express');
const trailerRouter = require('./trailer-service');
const app = express();

const port = 3004;

app.use('/api', trailerRouter);

app.listen(port, () => {
    console.log(`Microservice video http://localhost:${port}`);
});
