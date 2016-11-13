var canvas = document.createElement('canvas');
canvas.width = 512; canvas.height = 512;
document.body.appendChild(canvas);
var gl = canvas.getContext('webgl');
var vertexShader = createVertexShader([
	'attribute vec2 vertex;',
	'uniform float zoomVal;',
	'void main(void) {',
		'gl_Position = vec4 (vertex, 0.0, zoomVal);',
	'}',
].join('\n'));

var fragmentShader = createFragmentShader([
	'void main(void) {',
		'gl_FragColor = vec4(0.7, 1.0, 0.3, 1.0);',
	'}',
].join('\n'));

var program = createAndLinkPrograms(vertexShader, fragmentShader);
var zoomVal = gl.getUniformLocation(program, 'zoomVal');
gl.uniform1f(zoomVal, 1.0);
var vertex = new Float32Array([-0.5, -0.5, 0.5, -0.5, 0.0, 0.5]);
var zoom = 1.0;
var render = function () {
	gl.clearColor(1.0, 0.7, 0.3, 1.0);
	gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
	gl.uniform1f(zoomVal, zoom);
	var vertexBuffer = createAndBindBuffer(vertex, gl.ARRAY_BUFFER);
	var attr_vertex = gl.getAttribLocation(program, 'vertex');
	gl.enableVertexAttribArray(attr_vertex);
	gl.vertexAttribPointer(attr_vertex, 2, gl.FLOAT, gl.FALSE, 0, 0);
	gl.drawArrays(gl.TRIANGLES, 0, 3);
	requestAnimationFrame(render);
}

render();