const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 9000;
const rootDir = process.cwd();
const compression = require('compression');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);

const proxyApiUrl = process.env.API_URL;
const proxi3 = require('proxi3');

io.on('connection', (socket) => {
  proxi3.logging.on('proxy3:request', (data) => {
    socket.emit('proxi3:request', data);
  });
});

const proxi3Config = {
  headers: {
    accept: 'application/json, text/plain, */*',
    origin: process.env.API_URL,
    host: false,
    referer: process.env.API_URL + '/',
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
  }
};

const proxi3App = proxi3.app({ proxyApiUrl, proxi3Config });
proxi3App.use(compression({}));
proxi3App.listen(3000, '0.0.0.0');

app.use(express.static(path.join(rootDir, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'build', 'index.html'));
});

server.listen(PORT);
