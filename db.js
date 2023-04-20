// a connection pool allows multiple connections to the database
const { Pool } = require("pg");

const poolConfig = new Pool({
  user: "postgres",
  host: "localhost",
  database: "shopping_list",
  port: 5432, // default port used by PostgreSQL
  max: 1, // max number of connections available from the pool
});

module.exports = poolConfig;
