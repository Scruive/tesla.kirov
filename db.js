const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "scruive",
    host: "localhost",
    port: 5432,
    database: "projectdb"
});

module.exports = pool;