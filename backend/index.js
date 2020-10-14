const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
// const mongoose = require('mongoose');
// const db = mongoose.connection;
require('./database/dbConnection')
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(require('./routes/app-router'));
app.get('/', function (req, res) {
    res.send('E-Market')
})


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));