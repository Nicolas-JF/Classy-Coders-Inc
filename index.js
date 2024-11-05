class Employee {
    #name;
    #position;
    #salary;
    #isHired;
    static #allEmployees = []; // Static property to track all employees
  
    constructor(name, position, salary) {
      this.#name = name;
      this.#position = position;
      this.#salary = salary;
      this.#isHired = true;
      Employee.#allEmployees.push(this); // Add employee to static array
    }
  
    // Getter for salary
    getSalary() {
      return this.#salary;
    }
  
    // Setter for salary with error handling
    setSalary(amount) {
      if (amount < 0) {
        throw new Error("Salary cannot be negative");
      }
      this.#salary = amount;
    }
  
    // Getter for status
    getStatus() {
      return this.#isHired;
    }
  
    // Setter for status ("hire" or "fire")
    setStatus(command) {
      if (command === "hire") {
        this.#isHired = true;
      } else if (command === "fire") {
        this.#isHired = false;
      } else {
        throw new Error("Invalid command for setStatus");
      }
    }
  
    // Static method to get all employees
    static getEmployees() {
      return Employee.#allEmployees;
    }
  
    // Static method to get total payroll
    static getTotalPayroll() {
      return Employee.#allEmployees.reduce((total, emp) => total + emp.getSalary(), 0);
    }
  }
  
  // Manager Class (extends Employee)
  class Manager extends Employee {
    #department;
    #employeesManaged;
  
    constructor(name, position, salary, department) {
      super(name, position, salary);
      this.#department = department;
      this.#employeesManaged = [];
    }
  
    // Method to get managed employees
    getEmployeesManaged() {
      return this.#employeesManaged;
    }
  
    // Method to add an employee to the manager's team
    addEmployeeManaged(employee) {
      this.#employeesManaged.push(employee);
    }
  }
  
  // SoftwareEngineer Class (extends Employee)
  class SoftwareEngineer extends Employee {
    #programmingLanguages;
  
    constructor(name, position, salary, programmingLanguages) {
      super(name, position, salary);
      this.#programmingLanguages = programmingLanguages;
    }
  
    // Method to get programming languages
    getProgrammingLanguages() {
      return this.#programmingLanguages;
    }
  
    // Method to add a programming language
    setProgrammingLanguage(language) {
      this.#programmingLanguages.push(language);
    }
  }
  
  // SalesPerson Class (extends Employee)
  class SalesPerson extends Employee {
    #clients;
    #totalSales;
  
    constructor(name, position, salary, clients) {
      super(name, position, salary);
      this.#clients = clients;
      this.#totalSales = 0;
    }
  
    // Method to get total sales
    getSalesNumbers() {
      return this.#totalSales;
    }
  
    // Method to make a sale
    makeSale(amount) {
      this.#totalSales += amount;
    }
  
    // Method to find a specific client
    findClient(client) {
      return this.#clients.find(c => c === client);
    }
  }
  