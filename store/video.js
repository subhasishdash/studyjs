navigator.getWebcam = ( navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia);

// PeerJS object ** FOR PRODUCTION, GET YOUR OWN KEY at http://peerjs.com/peerserver **
var peer = new Peer({ key: 'y6bbqs8pykivygb9',
						debug: 3,
						config: {'iceServers': [
						{ url: 'turn:numb.viagenie.ca', username:"subhasishdash60@gmail.com", credential:"8125288195"}]}});

// On open, set the peer id
peer.on('open', function(){
	$('#my-id').text(peer.id);
});

peer.on('call', function(call) {
	// Answer automatically for demo
	call.answer(window.localStream);
	step3(call);
});

// Click handlers setup
$(function() {
	$('#make-call').click(function() {
		//Initiate a call!
		var call = peer.call($('#callto-id').val(), window.localStream);
		step3(call);
	});
	$('end-call').click(function() {
		window.existingCall.close();
		step2();
	});

	// Retry if getUserMedia fails
	$('#step1-retry').click(function() {
		$('#step1-error').hide();
		step();
	});

	// Get things started
	step1();
});

function step1() {
	//Get audio/video stream
	navigator.getWebcam({audio: true, video: true}, function(stream){
		step2();
		// Display the video stream in the video object
		$('#my-video').prop('src', URL.createObjectURL(stream));

		window.localStream = stream;
		
	}, function(){ $('#step1-error').show(); });
}

function step2() { //Adjust the UI
	$('#step1', '#step3').hide();
	$('#step2').show();
}

function step3(call) {
	// Hang up on an existing call if present
	if (window.existingCall) {
		window.existingCall.close();
	}

	// Wait for stream on the call, then setup peer video
	call.on('stream', function(stream) {
		$('#their-video').prop('src', URL.createObjectURL(stream));
	});
	$('#step1', '#step2').hide();
	$('#step3').show();
}






