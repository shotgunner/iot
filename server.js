var connect = require('connect');
var serveStatic = require('serve-static');
var server = connect().use(serveStatic(__dirname)).listen(8080);
var io = require('socket.io').listen(server);

var redis = require('redis');

function createClient(port, host, pass) {
    var client = redis.createClient(port, host);
    client.auth(pass);
    return client;
}

var client = createClient('6379' , '127.0.0.1', 'ZTNiMGM0NDI5OGZjMWMxNDlhZmJmNGM4OTk2ZmI5');


io.sockets.on('connection', function (socket) {
    console.log("vasl shod");
    socket.on('statusMessage', function (message) {
        console.log("I get message");
        console.log(message);
        
    });
});