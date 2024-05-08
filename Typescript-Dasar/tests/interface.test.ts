import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";
import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support in javascript", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko Abc",
      nib: "12323344",
    };

    seller.name = "ggwp";

    console.info(seller);
  });

  it("should support function interface", function () {
    interface addFunction {
      (value1: number, value2: number): number;
    }
    const add: addFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Eko", "Kurniawan", "Khannedy"];
    console.info(names);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Eko",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Eko");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  it("should support extends interface", function () {
    const employee: Employee = {
      id: "1",
      name: "Kevin",
      devision: "IT",
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Rubama",
      devision: "IT",
      numberOfEmployees: 10,
    };

    console.info(manager);
  });

  it("should support function in interface", function () {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "Kevin",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Kevin"));
  });

  it("should support intersection types", function () {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "Kevin",
    };

    console.info(domain);
  });

  it("should support types assertions", function () {
    const person: any = {
      name: "Kevin",
      age: 22,
    };

    const person2: Person = person as Person;
    // person2.sayHello("Kevin");

    console.info(person2);
  });
});
