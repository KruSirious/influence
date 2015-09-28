var io = require('socket.io'); // useless att he moment

var express = require('express');
var app = express();



//var server = http.createServer(function(req, res){
//      res.end('you asked for something else');
//};

var http = require('http').Server(app);

app.get('/', function(req, res){
    //__dirname is like__FILE__in php
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});