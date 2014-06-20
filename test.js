var gpio = require('rpi-gpio');

gpio.setup(23, gpio.DIR_OUT, write);

function write(){
	gpio.write(23, true, function(err){
		if(err) throw err;
		console.log('written to pin');
	});
}
