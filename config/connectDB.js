const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "195.35.22.205",
  user: "jaiclub",
  password: "f6JJHCawkTaeLdN5",
  database: "jaiclub",
});

export default connection;
