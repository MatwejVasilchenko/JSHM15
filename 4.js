function countTotalSalary(employees) {
    const totalSalary = 0;
  
    for (const employee in employees) {
      if (employees.hasOwnProperty(employee)) {
        const salary = employees[employee];
        totalSalary += salary;
      }
    }
  
    return totalSalary;
  }

   
  const employees = {
    John: 100,
    Sarah: 80,
    Michael: 102,
    Emily: 68,
  };

  const totalSalary = countTotalSalary(employees);
  console.log(totalSalary);  