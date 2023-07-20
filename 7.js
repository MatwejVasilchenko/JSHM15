function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = "";
  
    for (const employee in employees) {
      if (employees.hasOwnProperty(employee)) {
        const tasks = employees[employee];
        if (tasks > maxTasks) {
          maxTasks = tasks;
          bestEmployee = employee;
        }
      }
    }
  
    return bestEmployee;
  }

  
  const employees = {
    John: 10,
    Sarah: 8,
    Michael: 12,
    Emily: 6,
  };
  
  const bestEmployee = findBestEmployee(employees);
  console.log(bestEmployee);  // Виведе "Michael"
  