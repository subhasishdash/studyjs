var pgutil = require('./pgutil');
//initialize the database
pgutil.init();
//use the Database
pgutil.fetchData();
//close the connection
pgutil.closeConnection();