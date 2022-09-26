const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'heffalump.db.elephantsql.com', // Replace with your host name
  user: 'lmtcptha',      // Replace with your database username
  password: '4VrzB1uEJMEsclrWVRzg7sZMqxADoW5b',      // Replace with your database password
  database: 'lmtcptha' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;