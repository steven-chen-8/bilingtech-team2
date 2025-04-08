const { Pool } = require("pg")

const pool = new Pool({
  user: process.env.DB_USER || "postgres", // Replace with your PostgreSQL username
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "invoice_management",
  password: process.env.DB_PASSWORD || "", // Replace with your PostgreSQL password
  port: process.env.DB_PORT || 5432
})

module.exports = pool
