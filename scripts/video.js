function step1(){navigator.getWebcam({audio:!0,video:!0},function(e){step2(),$("#my-video").prop("src",URL.createObjectURL(e)),window.localStream=e},function(){$("#step1-error").show()})}function step2(){$("#step1","#step3").hide(),$("#step2").show()}function step3(e){window.existingCall&&window.existingCall.close(),e.on("stream",function(e){$("#their-video").prop("src",URL.createObjectURL(e))}),$("#step1","#step2").hide(),$("#step3").show()}navigator.getWebcam=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var peer=new Peer({key:"y6bbqs8pykivygb9",debug:3,config:{iceServers:[{url:"turn:numb.viagenie.ca",username:"subhasishdash60@gmail.com",credential:"8125288195"}]}});peer.on("open",function(){$("#my-id").text(peer.id)}),peer.on("call",function(e){e.answer(window.localStream),step3(e)}),$(function(){$("#make-call").click(function(){var e=peer.call($("#callto-id").val(),window.localStream);step3(e)}),$("end-call").click(function(){window.existingCall.close(),step2()}),$("#step1-retry").click(function(){$("#step1-error").hide(),step()}),step1()});