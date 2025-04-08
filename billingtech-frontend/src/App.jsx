import React, { useState } from "react"
import InvoiceList from "./components/InvoiceList"
import InvoiceDetails from "./components/InvoiceDetails"

const App = () => {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null)

  const handleRequestChange = lineItemId => {
    // Handle line item change request
    console.log("Requesting change for line item:", lineItemId)
    // Call backend API to submit change request
  }

  const handleRequestRefund = invoiceId => {
    // Handle refund request
    console.log("Requesting refund for invoice:", invoiceId)
    // Call backend API to submit refund request
  }

  return (
    <div>
      <h1>Invoice Management</h1>
      <InvoiceList onSelectInvoice={setSelectedInvoiceId} />
      <InvoiceDetails invoiceId={selectedInvoiceId} onRequestChange={handleRequestChange} onRequestRefund={handleRequestRefund} />
    </div>
  )
}

export default App
