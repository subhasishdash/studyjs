var x1 = -0.5, x2 = 0.5, x3 = 0.0, y1 = -0.5, y2 = -0.5, y3 = 0.5;
var lastX = 0, lastY = 0;

var x = document.getElementById('x');
var y = document.getElementById('y');
x.oninput = function () {
	if (this.value > lastX) {
		x1 += 0.01; x2 += 0.01; x3 += 0.01;
	} else if (this.value < lastX) {
		x1 -= 0.01; x2 -= 0.01; x3 -= 0.01;
	} 
	lastX = this.value;
}

y.oninput = function () {
	if (this.value > lastY) {
		y1 += 0.01; y2 += 0.01; y3 += 0.01;
	} else if (this.value < lastY) {
		y1 -= 0.01; y2 -= 0.01; y3 -= 0.01;
	}
	lastY = this.value;
}