const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let employees = [];

function showMenu() {
  console.log("\nEmployee Management System");
  console.log("1. Add Employee");
  console.log("2. List Employees");
  console.log("3. Remove Employee");
  console.log("4. Exit");

  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        addEmployee();
        break;
      case "2":
        listEmployees();
        break;
      case "3":
        removeEmployee();
        break;
      case "4":
        console.log("Exiting...");
        rl.close();
        break;
      default:
        console.log("Invalid choice, try again.");
        showMenu();
    }
  });
}

function addEmployee() {
  rl.question("Enter employee name: ", (name) => {
    rl.question("Enter employee ID: ", (id) => {
      employees.push({ name, id });
      console.log("✅ Employee added successfully!");
      showMenu();
    });
  });
}

function listEmployees() {
  console.log("\nEmployee List:");
  if (employees.length === 0) {
    console.log("No employees found.");
  } else {
    employees.forEach((emp, index) => {
      console.log(`${index + 1}. Name: ${emp.name}, ID: ${emp.id}`);
    });
  }
  showMenu();
}

function removeEmployee() {
  rl.question("Enter Employee ID to remove: ", (id) => {
    const index = employees.findIndex((emp) => emp.id === id);
    if (index !== -1) {
      employees.splice(index, 1);
      console.log("🗑 Employee removed successfully!");
    } else {
      console.log("❌ Employee not found!");
    }
    showMenu();
  });
}

// Start the program
showMenu();