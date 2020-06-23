const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.get('/api/test', (req, res) => {
  res.send('api test');
});

app.use(express.static(path.resolve(__dirname, '../dist/')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${3000}!`);
});
