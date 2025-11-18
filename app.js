const con = require('./database_conn');

// Example query
con.query("SELECT * FROM your_table", (err, results) => {
  if (err) throw err;
  console.log(results);
});
