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