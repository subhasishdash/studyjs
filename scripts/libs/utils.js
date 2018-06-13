var getWebGLContext = function(canvas){
	var ctx = null;
	
	if (canvas == null){
		alert('there is no canvas on this page');
		return null;
	}	
	var webglContextParams = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'];
	for (var index = 0; index < webglContextParams.length; index++) {
		try {
			ctx = canvas.getContext(webglContextParams[index]);
			if(ctx) {
				//breaking as we got our context
				break;
			}
		} catch (E) {
			console.log(E);
		}
	}
	if(ctx === null) {
		alert('WebGL is not supported on your browser.');
	} else {
		return ctx;
	}
}

var createVertexShader = function (vertexShaderSource) {
	console.log(vertexShaderSource);
	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
	gl.shaderSource(vertexShader, vertexShaderSource);
	gl.compileShader(vertexShader);
	return vertexShader;
}

var createFragmentShader = function (fragmentShaderSource) {
	console.log(fragmentShaderSource);
	var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
	gl.shaderSource(fragmentShader, fragmentShaderSource);
	gl.compileShader(fragmentShader);
	return fragmentShader;
}


var createAndLinkPrograms = function (vertexShader, fragmentShader) {
	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        alert('Could not initialise shaders');
    }
	gl.useProgram(program);
	return program;
}

var createAndBindBuffer = function (verticesOrIndices, bufferType) {
	var buffer = gl.createBuffer();
	gl.bindBuffer(bufferType, buffer);
	gl.bufferData(bufferType, verticesOrIndices, gl.STATIC_DRAW);
	//clear memory
//	gl.bindBuffer(bufferType, null);
	return buffer;
}

var allowAllImageSizes = function() {
	  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
	  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	  gl.bindTexture(gl.TEXTURE_2D, null);
}