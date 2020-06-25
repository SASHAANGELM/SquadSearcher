const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;
const httpServer = http.createServer(app);
const io = socketio(httpServer);

const api = require('./api/api');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

io.on('connection', socket => {
  console.log('A user connected');

  socket.emit('recieve', 11);

  socket.on('test', (a) => {
    console.log('test', a);
    socket.emit('recieve', 11);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.use('/api', api);

app.use(express.static(path.resolve(__dirname, '../dist/')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
