const dateInput = document.querySelector("date");
const paymentMethod = document.querySelector("paymentMethod");
const itemInput = document.querySelector("item");
const locationInput = document.querySelector("locaiton");
const costInput = document.querySelector("amount");
const expenseInput = document.getElementById("expenseTable");
const submitButton = document.getElementById("submit");



function getDate() {
    const date = dateInput.value;
    return date;
}

 function getPayment() {
   const payment = paymentMethod.value;
   return payment;
}

function getItem() {
    const item = itemInput.value;
    return item;
}

function getLocation() {
    const location = locationInput.value;
    return location;
}

function getCost() {
    const cost = costInput.value;
    return cost;
}

submitButton.addEventListener('click', function newExpense() {
    
    const row = expenseInput.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    cell1.textContent = date;
    cell2.textContent = payment;
    cell3.textContent = item;
    cell4.textContent = location;
    cell5.textContent = "$" + cost;
})
