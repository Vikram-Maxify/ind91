const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "72.61.238.64",
  user: "ind91",
  password: "P8SA7yGLC4GPcRpj",
  database: "ind91",
});

export default connection;
