"use strict";

let balance = 1000; // starting balance

// TODO-1: Implement getMenuChoice()
// Show a prompt with options: 1) Check Balance 2) Withdraw 3) Deposit 4) Exit
// Return the user's numeric choice (1..4). Validate and re-prompt if invalid.
function getMenuChoice() {
  // TODO
  while (true) {
        const input = prompt(
          "ATM Menu:\n" +
          "1. Check Balance\n" +
          "2. Withdraw\n" +
          "3. Deposit\n" +
          "4. Exit\n\n" +
          "Enter your choice (1-4):"
        );

        if (input === null) return 4; // treat cancel as Exit
        const choice = parseInt(input, 10);

        if ([1, 2, 3, 4].includes(choice)) {
          return choice;
        } else {
          alert("Invalid choice. Please enter a number between 1 and 4.");
        }
      }
}

function checkBalance() {
  alert(`Current balance: ₹${balance.toFixed(2)}`);
}

function deposit() {
  const input = prompt("Enter amount to deposit:");
  if (input === null) return;
  const amount = parseFloat(input);
  if (Number.isNaN(amount) || amount <= 0) {
    alert("Invalid amount. Please enter a positive number.");
    return;
  }
  balance += amount;
  alert(`Deposited ₹${amount.toFixed(2)}. New balance: ₹${balance.toFixed(2)}`);
}

// TODO-2: Implement withdraw()
// Prompt for amount; reject NaN/≤0; reject if amount > balance; deduct & alert.
function withdraw() {
  // TODO
  const input = prompt("Enter amount to withdraw:");
      if (input === null) return;
      const amount = parseFloat(input);
      if (Number.isNaN(amount) || amount <= 0) {
        alert("Invalid amount. Please enter a positive number.");
        return;
      }
      if (amount > balance) {
        alert("Insufficient balance!");
        return;
      }
      balance -= amount;
      alert(`Withdrew ₹${amount.toFixed(2)}. Remaining balance: ₹${balance.toFixed(2)}`);
}

function runATM() {
  while (true) {
    const choice = getMenuChoice();
    console.log("User chose:", choice);
    switch (choice) {
      case 1:
        checkBalance();
        break;
      case 2:
        withdraw();
        break;
      case 3:
        deposit();
        break;
      case 4:
        alert("Thank you for using the ATM. Goodbye!");
        return; // exit loop
    }
  }
}

document.getElementById("start").addEventListener("click", runATM);
