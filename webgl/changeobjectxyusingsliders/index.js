var canvas = document.createElement('canvas');
canvas.width = 512;
canvas.height = 512;
document.body.appendChild(canvas);

var gl = canvas.getContext('webgl');
var vertexShader = createVertexShader([
					'attribute vec2 attrVertices;',
					'void main(void) {',
						'gl_Position = vec4(attrVertices, 0.0,  1.0);',
					'}',
].join('\n'));

var fragmentShader = createFragmentShader([
					'void main(void) {',
						'gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);',
					'}'
].join('\n'));
var program = createAndLinkPrograms(vertexShader, fragmentShader);

var render = function () {
	gl.clearColor(0.0, 0.0, 1.0, 1.0);
	gl.clear(gl.DEPTH_BUFFER_BIT || gl.COLOR_BUFFER_BIT);
	var vertices = new Float32Array([x1, y1,
			x2, y2, 
			x3, y3]);
	var verticesBuffer = createAndBindBuffer(vertices, gl.ARRAY_BUFFER);
	var attrvert = gl.getAttribLocation(program, 'attrVertices');
	gl.enableVertexAttribArray(attrvert);
	gl.vertexAttribPointer(attrvert, 2, gl.FLOAT, gl.FALSE, 0, 0);
	gl.drawArrays(gl.TRIANGLES, 0, 3);
	requestAnimationFrame(render);
}

render();