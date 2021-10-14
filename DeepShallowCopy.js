//shallow copy

var employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
  
  
// console.log("Employee=> ", employee);
// var newEmployee = employee;    // Shallow copy
// console.log("New Employee=> ", newEmployee);
  
// console.log("---------After modification----------");
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);


//deep copy


//1)

// var newEmployee = {...employee}; 
// newEmployee.ename = "Beck";
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

//2)

var newEmployee = JSON.parse(JSON.stringify(employee));
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);