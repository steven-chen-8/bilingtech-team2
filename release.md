# Release Note

We are excited to introduce a comprehensive **Invoice Management** feature that enhances the user experience by allowing users to review their invoices, request changes to line items, and request full refunds.

## Key Enhancements

- **User-friendly interface**: Display a list of invoices and view detailed invoice information.
- **Change requests**: Select specific line items for changes and submit change requests, which the billing department can review and update.
- **Full refunds**: Request full refunds for incorrect charges.

## User Journey

1. Users log in and navigate to the invoice management section.
2. They can review their invoices, select line items for changes, and request full refunds.
3. The system fetches the relevant data from the database and displays it in the UI.

## Technical Details

- **Backend API Extensions**: Support for fetching invoice data, processing change requests, and handling refund requests.
- **Frontend Updates**: UI components to display invoices, line item changes, and refund requests.
- **Database Schema Modifications**: Tables to store invoice data, change requests, and refund requests.

This feature ensures seamless data management and retrieval, providing a streamlined and efficient way for users to manage their invoices and billing-related tasks.

### Prompts:
```
Craft a paragraph for the feature release notes based on #file:feature-requirement.md , #file:user-journey.md and #file:class-diagram.md 
```

```
Apply the pyramid principle for better readability
```

```
Translate #file:release-note.txt into .md markdown formatted text, wrap it into a code block with explicit formatting syntax
```