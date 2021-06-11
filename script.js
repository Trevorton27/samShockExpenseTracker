let expenseArray = JSON.parse(localStorage.getItem('expenseArray')) || [];
const dateInput = document.getElementById('date');
const paymentMethod = document.getElementById('paymentMethod');
const itemInput = document.getElementById('item');
const locationInput = document.getElementById('location');
const costInput = document.getElementById('amount');
const expenseTable = document.getElementById('expenseTable');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    !dateInput.value ||
    !paymentMethod.value ||
    !itemInput.value ||
    !locationInput.value ||
    !costInput.value
  ) {
    alert('Please fill out all fields before submitting. ');
    return;
  }

  const newExpense = {
    id: Date.now(),
    date: dateInput.value,
    description: itemInput.value,
    paymentMethod: paymentMethod.value,
    amount: `$${costInput.value}`,
    vendor: locationInput.value
  };

  addExpense(newExpense);

  document.getElementById('expenseInput').reset();
});

const addExpense = (expense) => {
  renderExpenseRow(expense);
  expenseArray.push(expense);
  pushToLocalStorage(expenseArray);
};

function pushToLocalStorage(array) {
  localStorage.setItem('expenseArray', JSON.stringify(array));
}

function renderExpenseRow(expense) {
  const createTableRowExpense = document.createElement('tr');
  expenseTable.appendChild(createTableRowExpense);
  createTableRowExpense.classList.add('tableRowExpense');

  const dateCell = createCell(expense.date);
  createTableRowExpense.appendChild(dateCell);

  const paymentMethodCell = createCell(expense.paymentMethod);
  createTableRowExpense.appendChild(paymentMethodCell);

  const costCell = createCell(expense.amount);
  costCell.classList.add('expenseAmount');
  createTableRowExpense.appendChild(costCell);

  const descriptionCell = createCell(expense.description);
  createTableRowExpense.appendChild(descriptionCell);

  const locationCell = createCell(expense.vendor);
  createTableRowExpense.appendChild(locationCell);

  const deleteCell = document.createElement('td');
  const deleteButton = createDeleteButton(expense);
  createTableRowExpense.appendChild(deleteCell);
  deleteCell.appendChild(deleteButton);
}

const createCell = (expense) => {
  const dataCell = document.createElement('td');
  dataCell.textContent = expense;
  return dataCell;
};

const createDeleteButton = (expense) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.setAttribute('class', 'deleteButton');

  deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    deleteExpense(deleteButton, expense.id);
  });
  return deleteButton;
};

function deleteExpense(deleteButton, id) {
  deleteButton.parentElement.parentElement.remove();
  expenseArray = expenseArray.filter((expense) => {
    return expense.id !== id;
  });
  pushToLocalStorage(expenseArray);
}

window.addEventListener('load', (e) => {
  e.preventDefault();
  expenseArray.forEach((expense) => {
    renderExpenseRow(expense);
  });
});
