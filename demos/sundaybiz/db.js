'use strict';
var mysql = require('mysql');
var utils = require('./utils');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sun",
  database : 'sundaybiz'
});

con.connect(function(err) {
	  if (err) throw err;
	  console.log('MySQL Connected');
});

var updateSetup = function (menu, type, data) {
	  /*var sql = "UPDATE mean_setup SET "+type+" = '"+data+"'";
	  console.log(sql);
	  con.query(sql, function (err, result) {
	    if (err) throw err;
	    console.log(result.affectedRows + " record(s) updated");
	  });*/
	  let tableName = menu + "_setup_" + type;
	  var sql = "truncate " + tableName;
	  con.query(sql, function (err, result) {
	    if (err) throw err;
		let text = utils.atob(data);
		let records = JSON.parse(text);
		let query = 'insert into ' + tableName + ' values';
		for (let idx = 0; idx < records.length; idx++) {
			let endQry = '), ';
			query += '(0, ';
			for (let idy = 0; idy < records[idx].length; idy++) {
				let endStr = '\", ';
				if (idy === records[idx].length - 1) endStr = '\"'
				query += '\"' + utils.btoa(records[idx][idy]) + endStr;
			}
			if (idx === records.length - 1) endQry = ')';
			query += endQry;
		}
		console.log(query);
		con.query(query, function (err, result) {
			if (err) throw err;
		});
	  });
}; 

var getMeanData = function (menu, type, callback) {
	/*con.query("SELECT "+type+" FROM mean_setup limit 1", function (err, result, fields) {
	    if (err) throw err;
	    console.log(result);
	    callback(result);
  	});*/
  	var sql = "SELECT * FROM " + menu + "_setup_" + type;
  	con.query(sql, function (err, result, fields) {
	    if (err) throw err;
	    callback(result);
  	});
}

module.exports = {
	updateSetup : updateSetup,
	getMeanData : getMeanData
}