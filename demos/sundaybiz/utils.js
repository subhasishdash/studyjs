'use strict';
module.exports = {
	btoa : function (data) { 
		let buff = new Buffer(data);  
		return buff.toString('base64');
	},
	atob : function (data) { 
		let buff = new Buffer(data, 'base64');  
		return buff.toString('ascii');
	}
}