const dateInput = document.getElementById("date");
const paymentMethod = document.getElementById("paymentMethod");
const itemInput = document.getElementById("item");
const locationInput = document.getElementById("location");
const costInput = document.getElementById("amount");
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

submitButton.addEventListener('click', function newExpense(event) {
    event.preventDefault();
    const row = expenseInput.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);

    cell1.textContent = getDate();
    cell2.textContent = getPayment();
    cell3.textContent = getItem();
    cell4.textContent = getLocation();
    cell5.textContent = "$" + getCost();
    cell6.textContent = "Delete";
 
    //cell styles to act like button//
    cell6.style.fontSize = '15px';
    cell6.style.color = 'white';
    cell6.style.backgroundColor = 'darkRed';
    cell6.style.borderRadius = '5px';
    cell6.style.cursor = 'pointer';

    cell6.addEventListener('click', (event) => {
        event.preventDefault();
        cell6.parentElement.remove();

    })
})