import React, { useEffect, useState } from "react"
import axios from "axios"
import "./InvoiceDetails.css" // Add a CSS file for styling

const InvoiceDetails = ({ invoiceId, onRequestChange, onRequestRefund }) => {
  const [invoice, setInvoice] = useState(null)

  useEffect(() => {
    if (invoiceId) {
      // Fetch invoice details from the backend
      axios
        .get(`http://localhost:5000/api/invoices/${invoiceId}`)
        .then(response => setInvoice(response.data))
        .catch(error => console.error("Error fetching invoice details:", error))
    }
  }, [invoiceId])

  if (!invoice) {
    return <div>Select an invoice to view details</div>
  }

  return (
    <div className="invoice-details-container">
      <h2>Invoice Details</h2>
      <p>
        <strong>Date:</strong> {invoice.invoice_date}
      </p>
      <p>
        <strong>Total Amount:</strong> ${invoice.total_amount}
      </p>
      <p>
        <strong>Status:</strong> {invoice.status}
      </p>
      <h3>Line Items</h3>
      <table className="line-items-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoice.line_items.map(item => (
            <tr key={item.line_item_id}>
              <td>{item.description}</td>
              <td>${item.total_price}</td>
              <td>
                <button className="request-change-button" onClick={() => onRequestChange(item.line_item_id)}>
                  Request Change
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="request-refund-button" onClick={() => onRequestRefund(invoice.invoice_id)}>
        Request Refund
      </button>
    </div>
  )
}

export default InvoiceDetails
