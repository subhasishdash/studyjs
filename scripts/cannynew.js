  var CannyJS, GrayImageData;

  var generateMatrix = function(width, height, initialValue) {
    var matrix = [];
    for (var x = 0; x < width; x++) {
      matrix[x] = [];
      for (var y = 0; y < height; y++) {
        matrix[x][y] = initialValue;
      }
    }
    return matrix;
  };


  /**
   * Class that represents gray-scaled image data
   */

  GrayImageData = (function() {

    /**
     * construct a new image data
     * @param {number} width of the image
     * @param {number} height of the image
     */
    function GrayImageData(width, height) {
      this.width = width;
      this.height = height;
      this.data = generateMatrix(this.width, this.height, 0);
      //this;
    }


    /**
     * load image data from canvas and store it as a matrix of gray-scaled pixels
     * @param {object} canvas object
     */

    GrayImageData.prototype.loadCanvas = function(canvas) {
      var b, ctx, d, g, i, r, rawdata, x, y;
      ctx = canvas.getContext('2d');
      rawdata = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      x = 0;y = 0;
      for (i = 0; i < rawdata.length; i += 4) {
        d = rawdata[i]; r = rawdata[i]; g = rawdata[i + 1]; b = rawdata[i + 2];
        this.data[x][y] = Math.round(0.298 * r + 0.586 * g + 0.116 * b);
        if (x === this.width - 1) {
          x = 0;
          y += 1;
        } else {
          x += 1;
        }
      }
      return this;
    };


    /**
     * get the neighbor of a given point
     * @param {number} x corrdinate of the point
     * @param {number} y corrdinate of the point
     * @param {number} size of the neighbors
     * @return {array} matrix of the neighbor of the point
     */

    GrayImageData.prototype.getNeighbors = function(x, y, size) {
      var i, j, neighbors, trnsX, trnsY ;
      neighbors = generateMatrix(size, size, 0);
      for (i = 0; i < size; i++) {
        neighbors[i] = [];
        for (j = 0; j < size; j++) {
          trnsX = x - (size - 1) / 2 + i;
          trnsY = y - (size - 1) / 2 + j;
          if (this.data[trnsX] && this.data[trnsX][trnsY]) {
            neighbors[i][j] = this.data[trnsX][trnsY];
          } else {
            neighbors[i][j] = 0;
          }
        }
      }
      return neighbors;
    };


    /**
     * iterate all the pixel in the image data
     * @param {number} size of the neighbors given to
     * @param {function} function that will applied to the pixel
     */

    GrayImageData.prototype.eachPixel = function(neighborSize, func) {
      var current, neighbors, x, y;
      for (x = 0; x < this.width; x++) {
        for (y = 0; y < this.height; y++) {
          current = this.data[x][y];
          neighbors = this.getNeighbors(x, y, neighborSize);
          func(x, y, current, neighbors);
        }
      }
      return this;
    };
    /**
     * return a deep copy of this object
     * @return {object} the copy of this object
     */

    GrayImageData.prototype.copy = function() {
      var copied, x, y;
      copied = new GrayImageData(this.width, this.height);
      for (x = 0; x < this.width; x++) {
        for (y = 0; y < this.height; y++) {
          copied.data[x][y] = this.data[x][y];
        }
      }
      copied.width = this.width;
      copied.height = this.height;
      return copied;
    };


    /**
     * draw the image on a given canvas
     * @param {object} target canvas object
     */

    GrayImageData.prototype.drawOn = function(canvas) {
    	var color, ctx, i, j, imgData;
    	ctx = canvas.getContext('2d');
    	imgData = ctx.createImageData(canvas.width, canvas.height);
    	for (y = 0, j = 0; y < this.height; y++) {
    		for (x = 0; x < this.width; x++) {
    			for (i = 0; i <= 2; i++) {
    				imgData.data[j++] = this.data[x][y];
    			}
    			imgData.data[j++] = 255;
    		}
    	}
    	return ctx.putImageData(imgData, 0, 0);
    };


    /**
     * fill the image with given color
     * @param {number} color to fill
     */

    GrayImageData.prototype.fill = function(color) {
      var x, y, _results;
      _results = [];
      for (y = 0; y < this.height; y++) {
        _results.push((function() {
          var _results1;
          _results1 = [];
          for (x = 0; x < this.width; x++) {
            _results1.push(this.data[x][y] = color);
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    return GrayImageData;

  })();


  /**
   * object that holds methods for image processing
   */

  CannyJS = {};


  /**
   * generate kernel matrix
   * @param {number} [sigmma] value of sigmma of gauss function
   * @param {number} [size] size of the kernel (must be an odd number)
   * @return {array} kernel matrix
   */

  CannyJS.generateKernel = function(sigmma, size) {
    var e, gaussian, i, j, kernel, sum, x, y;
    e = 2.718;
    kernel = generateMatrix(size, size, 0);
    sum = 0;
    for (i = 0; i < size ; i++) {
      x = -(size - 1) / 2 + i;
      for (j = 0; j < size; j++) {
        y = -(size - 1) / 2 + j;
        gaussian = (1 / (2 * Math.PI * sigmma * sigmma)) * Math.pow(e, -(x * x + y * y) / (2 * sigmma * sigmma));
        kernel[i][j] = gaussian;
        sum += gaussian;
      }
    }
    for (i = 0; i < size; i++) {
      for (j = 0; j < size; j++) {
        kernel[i][j] = (kernel[i][j] / sum).toFixed(3);
      }
    }
    console.log("kernel", kernel);
    return kernel;
  };


  /**
   * appy sobel filter to image data
   * @param {object} GrayImageData object
   * @return {object} GrayImageData object
   */

  CannyJS.sobel = function(imgData) {
    var copy, xFiler, yFiler;
    yFiler = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];
    xFiler = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];
    copy = imgData.copy();
    copy.fill(0);
    imgData.eachPixel(3, function(x, y, current, neighbors) {
      var ghs, gvs, i, j, _i, _j;
      ghs = 0;
      gvs = 0;
      for (i = _i = 0; _i <= 2; i = ++_i) {
        for (j = _j = 0; _j <= 2; j = ++_j) {
          ghs += yFiler[i][j] * neighbors[i][j];
          gvs += xFiler[i][j] * neighbors[i][j];
        }
      }
      return copy.data[x][y] = Math.sqrt(ghs * ghs + gvs * gvs);
    });
    return copy;
  };


  /**
   * appy non-maximum suppression to image data
   * @param {object} GrayImageData object
   * @return {object} GrayImageData object
   */

  CannyJS.nonMaximumSuppression = function(imgData) {
    var copy = imgData.copy();
    copy.fill(0);
    imgData.eachPixel(3, function(x, y, c, n) {
      if (n[1][1] > n[0][1] && n[1][1] > n[2][1]) {
        copy.data[x][y] = n[1][1];
      } else {
        copy.data[x][y] = 0;
      }
      if (n[1][1] > n[0][2] && n[1][1] > n[2][0]) {
        copy.data[x][y] = n[1][1];
      } else {
        copy.data[x][y] = 0;
      }
      if (n[1][1] > n[1][0] && n[1][1] > n[1][2]) {
        copy.data[x][y] = n[1][1];
      } else {
        copy.data[x][y] = 0;
      }
      if (n[1][1] > n[0][0] && n[1][1] > n[2][2]) {
        return copy.data[x][y] = n[1][1];
      } else {
        return copy.data[x][y] = 0;
      }
    });
    return copy;
  };


  /**
   * appy hysteresis threshold to image data
   * @param {object} GrayImageData object
   * @param {number} [ht=150] value of high threshold
   * @param {number} [lt=100] value of low threshold
   * @return {object} GrayImageData object
   */

  CannyJS.hysteresis = function(imgData, ht, lt) {
    var copy, isCandidate, isStrong, isWeak, traverseEdge;
    copy = imgData.copy();
    isStrong = function(edge) {
      return edge > ht;
    };
    isCandidate = function(edge) {
      return edge <= ht && edge >= lt;
    };
    isWeak = function(edge) {
      return edge < lt;
    };
    imgData.eachPixel(3, function(x, y, current, neighbors) {
      if (isStrong(current)) {
        return copy.data[x][y] = 255;
      } else if (isWeak(current) || isCandidate(current)) {
        return copy.data[x][y] = 0;
      }
    });
    traverseEdge = function(x, y) {
      var i, j, neighbors, _results;
      if (x === 0 || y === 0 || x === imgData.width - 1 || y === imgData.height - 1) {
        return;
      }	
      if (isStrong(copy.data[x][y])) {
        neighbors = copy.getNeighbors(x, y, 3);
        _results = [];
        for (i = 0; i <= 2; i++) {
          _results.push((function() {
            var _results1;
            _results1 = [];
            for (j = 0; j <= 2; j++) {
              if (isCandidate(neighbors[i][j])) {
                copy.data[x - 1 + i][y - 1 + j] = 255;
                _results1.push(traverseEdge(x - 1 + i, y - 1 + j));
              } else {
                _results1.push(void 0);
              }
            }
            return _results1;
          })());
        }
        return _results;
      }
    };
    copy.eachPixel(3, function(x, y) {
      return traverseEdge(x, y);
    });
    copy.eachPixel(1, function(x, y, current) {
      if (!isStrong(current)) {
        return copy.data[x][y] = 0;
      }
    });
    return copy;
  };


  /**
   * appy canny edge detection algorithm to canvas
   * @param {object} canvas object
   * @param {number} [ht=100] value of high threshold
   * @param {number} [lt=50] value of low threshold
   * @param {number} [sigmma=1.4] value of sigmma of gauss function
   * @param {number} [size=3] size of the kernel (must be an odd number)
   * @return {object} GrayImageData object
   */

  CannyJS.canny = function(canvas, ht, lt, sigmma, kernelSize) {
    var blur, imgData, nms, sobel;
    if (ht == null) { ht = 100; }
    if (lt == null) { lt = 50;  }
    if (sigmma == null) { sigmma = 1.4; }
    if (kernelSize == null) { kernelSize = 3; }
    imgData = new GrayImageData(canvas.width, canvas.height);
    imgData.loadCanvas(canvas);
    console.log("Canvas loading Done@!!!");
    blur = imgData;
    sobel = CannyJS.sobel(blur);
    console.log("Sobel Done@!!!");
    nms = CannyJS.nonMaximumSuppression(sobel);
    console.log("NMS Done@!!!");
    return CannyJS.hysteresis(nms, ht, lt);
  };