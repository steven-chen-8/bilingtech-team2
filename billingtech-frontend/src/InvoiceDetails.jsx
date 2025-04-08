import React, { useEffect, useState } from "react"

const InvoiceDetails = ({ invoiceId, onRequestChange, onRequestRefund }) => {
  const [invoice, setInvoice] = useState(null)

  useEffect(() => {
    if (invoiceId) {
      // Fetch invoice details from the backend
      fetch(`/api/invoices/${invoiceId}`)
        .then(response => response.json())
        .then(data => setInvoice(data))
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
        <strong>Title:</strong> {invoice.title}
      </p>
      <p>
        <strong>Total Amount:</strong> {invoice.totalAmount}
      </p>
      <h3>Line Items</h3>
      <ul>
        {invoice.lineItems.map(item => (
          <li key={item.id}>
            {item.description} - {item.amount}
            <button onClick={() => onRequestChange(item.id)}>Request Change</button>
          </li>
        ))}
      </ul>
      <button onClick={() => onRequestRefund(invoice.id)}>Request Full Refund</button>
    </div>
  )
}

export default InvoiceDetails
