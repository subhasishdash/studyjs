var db = require('./db');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static('.'));
var port = 3000;

app.listen(port, function (err, data) {
	if (!err)	
		console.log('Server running @ ', port);
});

app.post('/setup', function (req, res) {
	var menu = req.body.setup_menu;
	var type = req.body.setup_type;
	var data = req.body.setup_data;
	db.updateSetup(menu, type, data);
	res.send('Hello');
});

app.post('/retrieval', function (req, res) {
	var type = req.body.setup_type;
	var menu = req.body.setup_menu;
	db.getMeanData(menu, type, function (data) {
		res.send(data);
	});
});