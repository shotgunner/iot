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
    console.log("connect succesfully.");
    socket.on('statusMessage', function (message) {
        console.log(message);
		client.get(message.ID, function(err, res){
			io.sockets.socket(res).emit('changeStatus', message);
		});
    });
	socket.on('checkRDB', function(message){
		client.set(message.ID, socket.id);
		console.log("user is redis now with " + message.ID + " mysqlID and " + socket.id + " socketID :D");
	});
});
