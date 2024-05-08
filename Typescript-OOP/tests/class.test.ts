describe("Class", () => {
  class Customer {
    constructor() {
      console.info("Create new customer");
    }
  }

  class Order {}
  it("Should can create class", () => {
    const customer: Customer = new Customer();
    const order = new Order();
  });
  it("Should can create customer", () => {
    new Customer();
    new Customer();
  });
});
