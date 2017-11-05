// Load variables into environment from .env file.
// TODO: The result of this could be assigned and used to raise an error if one is returned.
require('dotenv').config();

const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();
const PORT = process.env.API_PORT || 3000;

const GifsController = require('./app/controllers/GifsController');

app.use(express.static(path.join(__dirname, 'dist')));

router.get('/gifs', GifsController.index);

// Mount routes at /api
app.use('/api', router);
// Raise 404 if a route with a controller is not hit.
app.use((req, res, next) => res.sendStatus(404));
// TODO: console.log is bad in prod, replace with winston, etc.
app.listen(PORT, () => console.log(`API started on port ${PORT}`));
