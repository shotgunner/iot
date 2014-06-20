var socket = io.connect('127.0.0.1:8080');
socket.emit('checkRDB', {
	ID: 2 // => 2 is human || 1 is raspbery pi
});

$(".button").on("click", function(){
    $(this).toggleClass("active");
	
	var powerStatus = $(this).hasClass("active");
	
    socket.emit('statusMessage', {
		power: powerStatus,
		ID: 1
	});	
});

socket.on('changeStatus', function (message) {
	console.log(message);
	if(message.powerStatus == '1'){
		$(".button").addClass("active");
	}else{
		$(".button").removeClass("active");
	}
});
