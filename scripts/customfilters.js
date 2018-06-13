(function(global) {

	'use strict';

	var fabric  = global.fabric || (global.fabric = { }),
	extend = fabric.util.object.extend;
	fabric.Image.filters.Contrast = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.MyFilter.prototype */ {

		/**
		 * Filter type
		 * @param {String} type
		 * @default
		 */
		type: 'Contrast',

		/**
		 * Constructor
		 */
		initialize: function(options) {
			options = options || { };
		},

		/**
		 * Applies filter to canvas element
		 * @param {Object} canvasEl Canvas element to apply filter to
		 */
		applyTo: function(canvasEl) {
			var context = canvasEl.getContext('2d'),
			imageData = context.getImageData(0, 0, canvasEl.width, canvasEl.height),
			data = imageData.data;
			var contrast = $("#contrast").val();
			var factor = (259 * (contrast + 255)) / (255 * (259 - contrast));

			for(var i=0;i<data.length;i+=4)
			{
				data[i] = factor * (data[i] - 128) + 128;
				data[i+1] = factor * (data[i+1] - 128) + 128;
				data[i+2] = factor * (data[i+2] - 128) + 128;
			}

			context.putImageData(imageData, 0, 0);
		},

		/**
		 * Returns object representation of an instance
		 * @return {Object} Object representation of an instance
		 */
		toObject: function() {
			return extend(this.callSuper('toObject'), {
			});
		}
	});
	
	 fabric.Image.filters.CannyEdgeDetect = fabric.util.createClass(fabric.Image.filters.BaseFilter, /** @lends fabric.Image.filters.MyFilter.prototype */ {

		    /**
		     * Filter type
		     * @param {String} type
		     * @default
		     */
		    type: 'CannyEdgeDetect',

		    /**
		     * Constructor
		     */
		    initialize: function(options) {
		      options = options || { };
		    },

		    /**
		     * Applies filter to canvas element
		     * @param {Object} canvasEl Canvas element to apply filter to
		     */
		    applyTo: function(canvasEl) {
		    	var ht = 100;
		        var lt = 40;
		        var sigma = 1.4;
		        var kernelSize = 3;
		        window.canny = CannyJS.canny(canvasEl, ht, lt, sigma, kernelSize);
		        canny.drawOn(canvasEl);
		    },

		    /**
		     * Returns object representation of an instance
		     * @return {Object} Object representation of an instance
		     */
		    toObject: function() {
		      return extend(this.callSuper('toObject'), {

		      });
		    }
		  });
	/**
	 * Returns filter instance from an object representation
	 * @static
	 * @param {Object} object Object to create an instance from
	 */
	fabric.Image.filters.Contrast.fromObject = function(object) {
		return new fabric.Image.filters.Contrast(object);
	};
	fabric.Image.filters.CannyEdgeDetect.fromObject = function(object) {
	    return new fabric.Image.filters.CannyEdgeDetect(object);
  };

})(typeof exports !== 'undefined' ? exports : this);