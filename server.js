
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var port = 5500;

app.use(express.static('public'));


io.on('connection', (socket) => {
	console.log('user connected');

	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});

	socket.on('disconnect', () => {
		console.log('user disconnected');
	});

});

http.listen(port, () => {
	console.log(`server is running or listening at port ${port}`);
});