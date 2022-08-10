const { Pool} = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'latihan',
  password: 'mynewpassword',
  port: 5432,
  // user: process.env.DB_USERNAME,
  // host: process.env.DB_HOST,
  // database: process.env.DB_DATABASE,
  // password: process.env.DB_PASSWORD,
  // port: process.env.DB_PORT
})

module.exports = pool