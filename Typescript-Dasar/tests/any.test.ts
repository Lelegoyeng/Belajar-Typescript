describe("Any", function () {
  it("should support in javascript", function () {
    const person: any = {
      id: 1,
      name: "Kevin Rubama",
      age: 30,
    };

    person.age = 31;
    person.address = "Indonesia";

    console.info(person);
  });
});
