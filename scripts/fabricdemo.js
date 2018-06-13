var canvas = new fabric.Canvas('canvas');
fabric.Image.fromURL('../images/fabricjs/dog.jpg', function (oImg) {
    canvas.add(oImg);
    canvas.centerObject(oImg);
    canvas.renderAll();
  }, {"scaleX": 0.50, "scaleY": 0.50});

var filters = [
               new fabric.Image.filters.Grayscale(),       // grayscale    
               new fabric.Image.filters.Sepia2(),          // sepia        
               new fabric.Image.filters.Invert(),          // invert       
           ];
var canvas1 = new fabric.Canvas('canvas1');
fabric.Image.fromURL('../images/fabricjs/dog.jpg', function (oImg) {
    canvas1.add(oImg);
    canvas1.centerObject(oImg);
    canvas1.renderAll();
  }, {"scaleX": 0.50, "scaleY": 0.50});

var convolutionFilters = [
               new fabric.Image.filters.Convolute({        // emboss       
            	   matrix: [  -2, -1, 0,
                              -1, 1, 1,
                              0, 1, 2 ]
               }),
               new fabric.Image.filters.Convolute({        // sharpen      
                   matrix: [  0, -1, 0,
                           -1, 5, -1,
                           0, -1, 0 ]
               }),

               new fabric.Image.filters.Convolute({        // edge enhance
                   matrix: [  -1, -1, -1,
                           -1, 9, -1,
                           -1, -1, -1 ]
               })
           ];

var canvas2 = new fabric.Canvas('canvas2');
fabric.Image.fromURL('../images/fabricjs/dog.jpg', function (oImg) {
    canvas2.add(oImg);
    canvas2.centerObject(oImg);
    canvas2.renderAll();
  }, {"scaleX": 0.50, "scaleY": 0.50});

var canvas3 = new fabric.Canvas('canvas3');
fabric.Image.fromURL('../images/fabricjs/dog.jpg', function (oImg) {
	oImg.filters.push(
			new fabric.Image.filters.Contrast);
	canvas3.add(oImg);
    canvas3.centerObject(oImg);
    canvas3.renderAll();
  }, {"scaleX": 0.50, "scaleY": 0.50});
$("#contrast").on("click", function () {
	var objects = canvas3.getObjects();
	var cimg= objects[0];  
	if(cimg.filters[2] == null) {
		cimg.filters[2] = new fabric.Image.filters.Contrast;
	}
    cimg.applyFilters(canvas3.renderAll.bind(canvas3));
});
$(function() {
    $('.convolutionFilters').on("change", "input", function () {
        var isChecked = $(this).prop("checked"),
            filter = $(this).data("filter"),
            obj = canvas2.getObjects()[0];
        obj.filters[filter] = isChecked ? convolutionFilters[filter] : null;
        obj.applyFilters(function () {
            canvas2.renderAll();
        });
    });
    
    $('.filters').on("change", "input", function () {
        var isChecked = $(this).prop("checked"),
            filter = $(this).data("filter"),
            obj = canvas1.getObjects()[0];
        obj.filters[filter] = isChecked ? filters[filter] : null;
        obj.applyFilters(function () {
            canvas1.renderAll();
        });
    });
});