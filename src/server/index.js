const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/', express.static(path.join(__dirname, '../../dist')));

app.listen(PORT, () => console.log('App listening on', PORT));

