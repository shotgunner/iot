var io_client = require( 'socket.io-client' );
var socket = io_client.connect( "10.10.10.221:8080" );
/* => after installation of node.js and rpi-gpio package with npm comment must remove <=
	1 - http://joshondesign.com/2013/10/23/noderpi
	2 - https://www.npmjs.org/package/rpi-gpio
	3 - http://nodejs.org/api/http.html#http_http_request_options_callback
*/
var gpio = require('rpi-gpio');


socket.emit('checkRDB', {
	ID: 1 // => 2 is human || 1 is raspbery pi
});
var led = 23 // pin number of led
var inputStatus = false;
socket.on('changeStatus', function(message)
{
	var power = message.power;
	if(power)
	{
		gpio.setup(led, gpio.DIR_OUT, on);
        }
        else
        {
		gpio.setup(led, gpio.DIR_OUT, off);
	}
});

function on()
 {
    console.log(1);
    gpio.write(led, true, function(err) {
        if (err) throw err;
        console.log('LED=>power on');
    });
}

function off()
{
    console.log(0);
    gpio.write(led, false, function(err)
    {
        if (err) throw err;
        console.log('LED=>power off');
    });

}
//gpio.setup(7, gpio.DIR_IN, shalgham);

function shalgham()
{
	console.log("hehehe");
}

//gpio.on('change', function(channel, value)
//{
//	console.log('fahmidam :D');
//});
//gpio.setup(7, gpio.DIR_IN, shalgham);

//function readInput2(){
//	while(true)
//	{
//		gpio.read(7,function(err, value)
//		{
//			if(value!=inputStatus)
//			{
//				socket.emit('statusMessage', {
//				        power: value,
//				        ID: 2
//				});
//			}
//			inputStatus = value;
//		});
//	}
//}
//gpio.on('change', function(channel, value) {
//	console.log('Channel ' + channel + ' value is now ' + value);
//});

function checkInput(){
	gpio.read(7, function(err, value)
	{
		if(inputStatus != value)
		{
			socket.emit('statusMessage', {
			        power: value,
			        ID: 2
			});

		}
        	inputStatus = value;
        });
}


function readInput() {
    gpio.read(led, function(err, value) 
    {
    	console.log('The value is ' + value);
	if(value)
	{
		socket.emit('statusMessage', {
			power: 1,
			ID: 2 //send to human :D
		});
	}
	else
	{
		socket.emit('statusMessage', {
			power: 0,
			ID: 2 //send to human :D
		});
	}
    });
}



