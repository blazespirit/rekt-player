const express     = require('express');
const bodyParser  = require('body-parser');
const path        = require('path');
const server      = express();
const http        = require('http').Server(server);
const io          = require('socket.io')(http);
const ipcRenderer = require('electron').ipcRenderer;

// setup socket.io
io.on('connection', function(socket) {
    console.log('a remote connected!');

    socket.on('gesture', function(gesture) {
        console.log(`remote fire ${gesture}.`);
        ipcRenderer.send('gesture', gesture);
    });

    socket.on('disconnect', function () {
        console.log('a remote disconnected');
    });
});

// serve html and other static files
server.use('/', express.static(path.join(__dirname, 'public')));

// get data from POST method
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// enable CORS
server.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

http.listen(3000, () => {
    console.log('Listening on port 3000');
});

