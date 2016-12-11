var pg = require('pg');
var pgutil = function pgutil(){};

var pool = null;

pgutil.prototype.init = function () {
    //this initializes a connection pool 
    //it will keep idle connections open for a 30 seconds 
    //and set a limit of maximum 10 idle clients 
    var config = {
        host: 'localhost', // server name or IP address;
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'test123',
        max: 10, // max number of clients in the pool 
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
    };
    pool = new pg.Pool(config);
};

pgutil.prototype.fetchData = function (obj) {
    // to run a query we can acquire a client from the pool, 
    // run a query on the client, and then return the client to the pool 
    pool.connect(function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('SELECT * FROM pg_catalog.pg_tables', function(err, result) {
        //call `done()` to release the client back to the pool 
        done();
     
        if(err) {
          return console.error('error running query', err);
        }
        console.log(result);
      });
    });
     
    pool.on('error', function (err, client) {
      console.error('idle client error', err.message, err.stack)
    });
};

pgutil.prototype.closeConnection = function() {
    pool.end();
}

module.exports = new pgutil();