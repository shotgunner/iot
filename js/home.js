$(".button").on("click", function(){
    $(this).toggleClass("active");
	var socket = io.connect('10.10.10.221:8080');
	var powerStatus = $(this).hasClass("active");
    socket.emit('statusMessage', {
		power: powerStatus,
		ID: 1
	});
	
	socket.emit('checkRDB', {
		ID: 2 // => 2 is human || 1 is raspbery pi
	});
});
