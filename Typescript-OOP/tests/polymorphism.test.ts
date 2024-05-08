describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}
  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello Vp ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
    console.info(`Hello ${employee.name}`);
  }

  it("should support", () => {
    let employee: Employee = new Employee("Kevin");
    console.info(employee);

    employee = new Manager("Kevin");
    console.info(employee);

    employee = new VicePresident("Kevin");
    console.info(employee);
  });

  it("should support method parameter polymorphism", () => {
    sayHello(new Employee("Kevin"));
    sayHello(new Manager("Kevin"));
    sayHello(new VicePresident("Kevin"));
  });
});
