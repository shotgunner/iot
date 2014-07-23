var connect = require('connect');
var serveStatic = require('serve-static');
var server = connect().use(serveStatic(__dirname)).listen(8080);
var io = require('socket.io').listen(server);


io.sockets.on('connection', function (socket) {
    console.log("vasl shod");
    socket.on('statusMessage', function (message) {
        console.log("I get message");
        console.log(message);
        
    });
});