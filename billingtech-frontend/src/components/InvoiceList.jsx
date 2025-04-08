import React, { useEffect, useState } from "react"
import axios from "axios"

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
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.invoice_id} onClick={() => onSelectInvoice(invoice.invoice_id)}>
            {invoice.invoice_date} - ${invoice.total_amount} - {invoice.status}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InvoiceList
