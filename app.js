

var express = require('express');
var app = express();



//var server = http.createServer(function(req, res){
//      res.end('you asked for something else');
//};

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});