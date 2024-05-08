describe("Inheritance", () => {
  // parent class
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}
  class Director extends Manager {}

  it("should support", () => {
    const employee = new Employee("Eko");
    console.info(employee);
    const manager = new Manager("Budi");
    console.info(manager);
    const director = new Director("Joko");
    console.info(director);
  });
});
