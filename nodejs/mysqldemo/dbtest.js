var MySQLDB = require('./mysqlutil');
//initialize the database
MySQLDB.init();
//use the Database
MySQLDB.fetchData();
//close the connection
MySQLDB.closeConnection();