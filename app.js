const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.log(`API started on port ${PORT}`));
