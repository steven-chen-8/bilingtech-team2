import React, { useState } from "react"
import axios from "axios"

const ChangeRequestForm = ({ lineItemId, onClose }) => {
  const [description, setDescription] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post("http://localhost:5000/api/change_requests", {
        line_item_id: lineItemId,
        user_id: 1, // Replace with actual user ID
        request_description: description,
        status: "Pending"
      })
      .then(() => {
        alert("Change request submitted successfully")
        onClose()
      })
      .catch(error => console.error("Error submitting change request:", error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Submit Change Request</h3>
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the change you want to request" required />
      <button type="submit">Submit</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  )
}

export default ChangeRequestForm
