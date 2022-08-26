var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin_pet",
  password: "admin@2309",
  database: "pet_shop"
});

con.connect(function(err, con){
  if(err) console.log('Successful connection');
});

module.exports = con;