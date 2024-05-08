describe("Relationshop", () => {
  class Person {
    constructor(public name: string) {}
  }

  class Customer {
    constructor(public name: string) {}
  }

  it("Should support", () => {
    const person: Person = new Customer("Kevin");
    console.info(person.name);
  });
});
