### User Journey:

```mermaid
journey
    title Invoice Management User Journey
    section Invoice Review
      Display List of Invoices: 5: User
      View Invoice Details: 5: User
    section Request Changes to Line Items
      Select Line Item for Change: 5: User
      Submit Change Request: 5: User
    section Request Full Refund
      Request Refund for Invoice: 5: User
    section Backend Services
      Fetch List of Invoices: 5: Backend Developer
      Fetch Invoice Details: 5: Backend Developer
      Process Line Item Change Request: 5: Backend Developer
      Process Refund Request: 5: Backend Developer
    section Storage
      Store Invoices: 5: Database Administrator
      Store Change Requests: 5: Database Administrator
      Store Refund Requests: 5: Database Administrator
```

### Prompts:

```
Translate the #file:feature-requirement.md into a user journey
considering following mermaid format:

journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
```