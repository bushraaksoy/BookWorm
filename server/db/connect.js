const { Pool } = require("pg");

// PostgreSQL connection pool
const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "library",
  password: "password",
  port: 5432,
});

// asyncronous database connection
const connectDB = (query) => {
  return new Promise((resolve, reject) => {
    db.connect((err, client, release) => {
      if (err) {
        reject("Error connecting to the server");
      } else {
        client.query(query, (err, result) => {
          release();
          if (err) {
            reject(err.message);
            reject("Error executing the query");
          } else {
            resolve(result.rows);
          }
        });
      }
    });
  });
};

// non asyncronous connection to the db
function makeConnection(query, req, res) {
  db.connect((err, client, release) => {
    if (err) {
      res.send("Error connecting to the server");
    } else {
      client.query(query, (err, result) => {
        release();
        if (err) {
          console.log(err.message);
          res.send("Error executing the query");
        } else {
          res.send(result.rows);
        }
      });
    }
  });
}

module.exports = connectDB;
