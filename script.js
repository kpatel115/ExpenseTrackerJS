// array with total expenses from user input
let expenses = [];
// total sum of expenses from user
let totalAmount = 0;

const categorySelect = document.getElementById('category-select')
const amountInput = document.getElementById('amount-input')
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expenseTableBody = document.getElementById('expenses-table-body');
const totalAmountArea = document.getElementById('total-amount');

// add event listenter to add button

addBtn.addEventListener('click', function(e){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    // validate user Input

    if(category === ""){
        alert('Please select Category!');
        return;
    }
    if (isNaN(amount) || amount <= 0){
        alert('Please enter Amount!');
        return;
    }
    if(date === ''){
        alert('Please enter Date!');
        return;
    }

    // finally add expense to list 
    // adding objects to a array 
    expenses.push({category, amount, date});
    console.log(expenses)

    totalAmount += amount;
    totalAmountArea.textContent = totalAmount;

    // add a new row 

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell()
    const amountCell = newRow.insertCell()
    const dateCell = newRow.insertCell()
    const deleteCell = newRow.insertCell()
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(e){
        expenses.splice(expenses.indexOf(expense), 1)

        totalAmount -= expense.amount;
        totalAmountArea.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
        e.preventDefault()
    });

    const expense = expenses[expenses.length - 1];
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);

    e.preventDefault()
});

// iterate over each expense and then add a row for each one
for (const expense of expenses) {
    totalAmount += expense.amount;
    totalAmountArea.textContent = totalAmount;

    const newRow = expenseTableBody.insertRow();
    const categoryCell = newRow.insertCell()
    const amountCell = newRow.insertCell()
    const dateCell = newRow.insertCell()
    const deleteCell = newRow.insertCell()
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense), 1)

        totalAmount -= expense.amount;
        totalAmountArea.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    });
    categoryCell.textContent = expense.category;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(deleteBtn);
};