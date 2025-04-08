import React, { useEffect, useState } from "react"

const InvoiceList = ({ onSelectInvoice }) => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    // Fetch the list of invoices from the backend
    fetch("/api/invoices")
      .then(response => response.json())
      .then(data => setInvoices(data))
      .catch(error => console.error("Error fetching invoices:", error))
  }, [])

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id} onClick={() => onSelectInvoice(invoice.id)}>
            {invoice.title} - {invoice.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InvoiceList
