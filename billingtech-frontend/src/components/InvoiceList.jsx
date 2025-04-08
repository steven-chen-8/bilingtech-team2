import React, { useEffect, useState } from "react"
import axios from "axios"
import "./InvoiceList.css" // Add a CSS file for styling

const InvoiceList = ({ onSelectInvoice }) => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    // Fetch the list of invoices from the backend
    axios
      .get("http://localhost:5000/api/invoices")
      .then(response => setInvoices(response.data))
      .catch(error => console.error("Error fetching invoices:", error))
  }, [])

  return (
    <div className="invoice-table-container">
      <h2 className="invoice-table-title">Invoices</h2>
      <table className="invoice-table">
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map(invoice => (
            <tr key={invoice.invoice_id}>
              <td>{invoice.invoice_id}</td>
              <td>{invoice.invoice_date}</td>
              <td>${invoice.total_amount}</td>
              <td>{invoice.status}</td>
              <td>
                <button className="view-details-button" onClick={() => onSelectInvoice(invoice.invoice_id)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InvoiceList
