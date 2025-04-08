require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require("./db") // MySQL connection

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Routes

// Fetch list of invoices
app.get("/api/invoices", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM invoices")
    res.status(200).json(rows)
  } catch (error) {
    console.error("Error fetching invoices:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

// Fetch details of a specific invoice
app.get("/api/invoices/:invoice_id", async (req, res) => {
  const { invoice_id } = req.params
  try {
    const [invoice] = await db.query("SELECT * FROM invoices WHERE invoice_id = ?", [invoice_id])
    if (invoice.length === 0) {
      return res.status(404).json({ message: "Invoice not found" })
    }

    const [lineItems] = await db.query("SELECT * FROM line_items WHERE invoice_id = ?", [invoice_id])
    invoice[0].line_items = lineItems

    res.status(200).json(invoice[0])
  } catch (error) {
    console.error("Error fetching invoice details:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

// Fetch details of a specific line item
app.get("/api/invoices/:invoice_id/line_items/:line_item_id", async (req, res) => {
  const { line_item_id } = req.params
  try {
    const [rows] = await db.query("SELECT * FROM line_items WHERE line_item_id = ?", [line_item_id])
    if (rows.length === 0) {
      return res.status(404).json({ message: "Line item not found" })
    }
    res.status(200).json(rows[0])
  } catch (error) {
    console.error("Error fetching line item details:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

// Submit a change request
app.post("/api/change_requests", async (req, res) => {
  const { line_item_id, user_id, request_description, status } = req.body
  try {
    const [result] = await db.query("INSERT INTO change_requests (line_item_id, user_id, request_description, status) VALUES (?, ?, ?, ?)", [line_item_id, user_id, request_description, status || "Pending"])
    res.status(201).json({ change_request_id: result.insertId })
  } catch (error) {
    console.error("Error submitting change request:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

// Submit a refund request
app.post("/api/refund_requests", async (req, res) => {
  const { invoice_id, user_id, request_description, status } = req.body
  try {
    const [result] = await db.query("INSERT INTO refund_requests (invoice_id, user_id, request_description, status) VALUES (?, ?, ?, ?)", [invoice_id, user_id, request_description, status || "Pending"])
    res.status(201).json({ refund_request_id: result.insertId })
  } catch (error) {
    console.error("Error submitting refund request:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
