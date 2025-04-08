import React, { useEffect, useState } from "react"
import axios from "axios"

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
    <div>
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
      <ul>
        {invoice.line_items.map(item => (
          <li key={item.line_item_id}>
            {item.description} - ${item.total_price}
            <button onClick={() => onRequestChange(item.line_item_id)}>Request Change</button>
          </li>
        ))}
      </ul>
      <button onClick={() => onRequestRefund(invoice.invoice_id)}>Request Refund</button>
    </div>
  )
}

export default InvoiceDetails
