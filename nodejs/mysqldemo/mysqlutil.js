var mysql = require('mysql');
var connection = null;

var MySQL = function MySQL(){};

var connection = null;

MySQL.prototype.init = function () {
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'sun',
        database : 'test'
    });
    connection.connect();
};

MySQL.prototype.fetchData = function (data) {
    connection.query('show tables', function(err, rows, fields)   
    {  
        if(!err) {
            console.log(rows);
        } else {
            console.log('Something went wrong : ' + err);
        }
    }); 
}

MySQL.prototype.closeConnection = function() {
    connection.end();
}

module.exports = new MySQL();