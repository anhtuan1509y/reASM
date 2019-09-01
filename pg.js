const{Client, Pool} = require('pg')

var client = new Client({
    host: "localhost",
    database: "upload",
    port: 5432,
    password: "123",
    user: "postgres"
})

client.connect();

module.exports = client;