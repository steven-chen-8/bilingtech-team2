### Class Diagram:

```mermaid
---
title: Invoice Management System
---
classDiagram
    class User {
        +int user_id
        +String username
        +String email
        +String password_hash
        +Timestamp created_at
    }

    class Invoice {
        +int invoice_id
        +int user_id
        +Date invoice_date
        +float total_amount
        +String status
        +Timestamp created_at
    }

    class LineItem {
        +int line_item_id
        +int invoice_id
        +String description
        +int quantity
        +float unit_price
        +float total_price
        +Timestamp created_at
    }

    class ChangeRequest {
        +int change_request_id
        +int line_item_id
        +int user_id
        +String request_description
        +String status
        +Timestamp created_at
    }

    class RefundRequest {
        +int refund_request_id
        +int invoice_id
        +int user_id
        +String request_description
        +String status
        +Timestamp created_at
    }

    User "1" --> "0..*" Invoice : owns
    Invoice "1" --> "0..*" LineItem : contains
    LineItem "1" --> "0..*" ChangeRequest : has
    Invoice "1" --> "0..*" RefundRequest : has
    User "1" --> "0..*" ChangeRequest : requests
    User "1" --> "0..*" RefundRequest : requests
```

### Prompts:

```
Translate the #file:migrations.sql into class diagrams for users, invoices, change requests and refund requests considering following mermaid format

---
title: Bank example
---
classDiagram
    class BankAccount
    BankAccount : +String owner
    BankAccount : +Bigdecimal balance
    BankAccount : +deposit(amount)
    BankAccount : +withdrawal(amount)
```