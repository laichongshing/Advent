const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const proxy = require('http-proxy-middleware');

const app = express();
const compiler = webpack(config);

const port = 3000;

var http = require('http').Server(app);
var io = require('socket.io')(http);

var i = 0;
var date = new Date();
var dateString = "";
io.on('connection', function(socket) {
    socket.on('join-room', function(room) {
	console.log("Client joining room: " + room);
	socket.join(room);
	
	socket.on('chat message', function(data) {
	    data.id = i++;
	    dateString = date.getMonth() + "/" + date.getDay() + "/" + date.getYear();
	    data.date = dateString;
	    io.to(room).emit('chat message', data);
	});
	
    });    
});


// Proxy for where requests to /api go
const apiProxy = proxy('http://localhost:8080/api/');
app.use('/api', apiProxy);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}));

app.use('/static', express.static('static'));

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

http.listen(port, 'localhost', (err) => {
    if (err) {
	console.log(err);
	return;
    }

    console.log(`Listening at http://localhost:${port}`);
	       });
