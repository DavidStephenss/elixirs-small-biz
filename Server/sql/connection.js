const mysql = require("mysql");
require("dotenv").config();
class Connection {
constructor() {
if (!this.pool) {
console.log("creating mysql connection...");
this.pool = mysql.createPool({
connectionLimit: 100,
host: process.env.DB_HOST,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_DATABASE,
});

return this.pool;
}

return this.pool;
}
}

const instance = new Connection();

module.exports = instance;
// const mysql = require("mysql");
// require("dotenv").config();

// class Connection {
//   constructor() {
//     if (!this.pool) {
//       console.log("create sql Connection...");
//       this.pool = mysql.createPool({
//         connectionLimit: 100,
//         host:process.env.DB_HOST,
//         user:process.env.DB_USER,
//         password:process.env.DB_PASSWORD,
//         database:process.env.DEFAULT_DB,
//       });
//       return this.pool;
// }

// const instance = new Connection();

// module.exports = instance