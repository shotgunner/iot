var io_client = require( 'socket.io-client' );
var socket = io_client.connect( "10.10.10.221:8080" );


socket.emit('checkRDB', {
	ID: 1 // => 2 is human || 1 is raspbery pi
});

socket.emit('statusMessage', {
	power: 0,
	ID: 2
});

socket.on('changeStatus', function(message){
	console.log(message);	
});
