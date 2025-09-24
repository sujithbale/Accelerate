# Mini Shopping Cart — Problem Statement

You are creating a **mini shopping cart application**.  
Users can add items with name and price, and at checkout the cart applies a discount if eligible.  

### Current Features Implemented
- Checkout displays subtotal, discount, and final bill.
- `console.table` shows cart contents.
- Subtotal calculation is already done.

### Your TODOs
1. **`addItem(name, price)`** – Implement as a function expression. Validate inputs (non-empty name, price > 0). Add the item (`{name, price}`) to the `items` array.  
2. **`applyDiscount(total)`** – Implement as an arrow function. If total > 500, apply a 10% discount, else return total unchanged.  
