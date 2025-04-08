import React, { useState } from "react"
import "./App.css" // Import the CSS file
import InvoiceList from "./components/InvoiceList.jsx"
import InvoiceDetails from "./components/InvoiceDetails.jsx"
import ChangeRequestForm from "./components/ChangeRequestForm.jsx"
import RefundRequestForm from "./components/RefundRequestForm.jsx"

const App = () => {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState(null)
  const [showChangeRequestForm, setShowChangeRequestForm] = useState(false)
  const [showRefundRequestForm, setShowRefundRequestForm] = useState(false)
  const [selectedLineItemId, setSelectedLineItemId] = useState(null)

  const handleRequestChange = lineItemId => {
    setSelectedLineItemId(lineItemId)
    setShowChangeRequestForm(true)
  }

  const handleRequestRefund = invoiceId => {
    setSelectedInvoiceId(invoiceId)
    setShowRefundRequestForm(true)
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Invoice Management</h1>
      <InvoiceList onSelectInvoice={setSelectedInvoiceId} />
      {selectedInvoiceId && <InvoiceDetails invoiceId={selectedInvoiceId} onRequestChange={handleRequestChange} onRequestRefund={handleRequestRefund} />}
      {showChangeRequestForm && <ChangeRequestForm lineItemId={selectedLineItemId} onClose={() => setShowChangeRequestForm(false)} />}
      {showRefundRequestForm && <RefundRequestForm invoiceId={selectedInvoiceId} onClose={() => setShowRefundRequestForm(false)} />}
    </div>
  )
}

export default App
