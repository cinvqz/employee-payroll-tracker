// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employeesArray = [];

  const employee = createEmployee();
  employeesArray.push(employee);

  while (confirm("Would you like to add another employee?")){
    const employee = createEmployee();
    employeesArray.push(employee);
  }

  return employeesArray;
};

function createEmployee() {
  const employee = {
    firstName: '',
    lastName: '',
    salary: 0, 
  };

  employee.firstName = prompt("Enter first name:");
  employee.lastName = prompt("Enter last name:");
  employee.salary = prompt("Enter salary:");

  if (isNaN(employee.salary)) {
    employee.salary = 0;
  } else{
    employee.salary = parseFloat(employee.salary);
  }

  return employee;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
 let totalOfSalaries = 0;

 for (let i = 0; i < employeesArray.length; i++) {
  totalOfSalaries += employeesArray[i].salary;
 }

let salaryAverage = totalOfSalaries/ employeesArray.length
salaryAverage = salaryAverage.toFixed(2);

console.log (`The average employee salary between our 3 employee(s) is: $${salaryAverage}`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployee = employeesArray[(Math.floor(Math.random()*employeesArray.length))];
  console.log (`Congratulations to ${randomEmployee.firstName} our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
