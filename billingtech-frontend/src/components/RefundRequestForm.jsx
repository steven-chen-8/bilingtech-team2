import React, { useState } from "react"
import axios from "axios"

const RefundRequestForm = ({ invoiceId, onClose }) => {
  const [description, setDescription] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/api/refund_requests", {
        invoice_id: invoiceId,
        user_id: 1, // Replace with actual user ID
        request_description: description,
        status: "Pending"
      })
      .then(() => {
        alert("Refund request submitted successfully")
        onClose()
      })
      .catch(error => console.error("Error submitting refund request:", error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Refund Request</h3>
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the reason for the refund request" required />
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  )
}

export default RefundRequestForm
