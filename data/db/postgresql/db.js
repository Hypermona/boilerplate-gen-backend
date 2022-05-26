const { Client } = require("pg");
const databaseConnection = () => {
  const client = new Client({
    user: "dbuser",
    host: "database.server.com",
    database: "mydb",
    password: "secretpassword",
    port: 3211,
  });
  client.connect();
};

module.exports = databaseConnection;
