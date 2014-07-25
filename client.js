var io_client = require( 'socket.io-client' );
var socket = io_client.connect( "10.10.10.221:8080" );
/* => after installation of node.js and rpi-gpio package with npm comment must remove <=
	1 - http://joshondesign.com/2013/10/23/noderpi
	2 - https://www.npmjs.org/package/rpi-gpio
	3 - http://nodejs.org/api/http.html#http_http_request_options_callback
*/
//var gpio = require('rpi-gpio');


socket.emit('checkRDB', {
	ID: 1 // => 2 is human || 1 is raspbery pi
});
//var led = 23 // pin number of led

socket.on('changeStatus', function(message){
//	gpio.setup(led, gpio.DIR_OUT, write(message.power));	
});

//function write(power) {
//    gpio.write(led, bool(power), function(err) {
//        if (err) throw err;
//        console.log('LED=>power changed');
//    });
//}

//gpio.on('change', function(channel, value) {
//	console.log('Channel ' + channel + ' value is now ' + value);
//	gpio.setup(led, gpio.DIR_IN, readInput);

//function readInput() {
//    gpio.read(led, function(err, value) {
//      console.log('The value is ' + value);
//		if(bool(value))
//		{
//			socket.emit('statusMessage', {
//				power: 1,
//				ID: 2 //send to human :D
//			});
//		}
//		else
//		{
//			socket.emit('statusMessage', {
//				power: 0,
//				ID: 2 //send to human :D
//			});
//		}
//    });
//}
//});



