describe("Function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    expect(sayHello("Kevin")).toBe("Hello Kevin");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Kevin");
  });

  it("should support default value", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Kevin")).toBe("Hello Kevin");
  });

  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
      }
      return `Hello ${firstName}`;
    }

    expect(sayHello("Kevin")).toBe("Hello Kevin");
    expect(sayHello("Kevin", "Rubama")).toBe("Hello Kevin Rubama");
  });

  it("should support function overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(callMe(10)).toBe(100);
    expect(callMe("kEVin")).toBe("KEVIN");
  });

  it("should function as parameter", function () {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(name: string): string {
      return name.toUpperCase();
    }

    expect(sayHello("Kevin", toUpper)).toBe("Hello KEVIN");
    expect(
      sayHello("Kevin", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hello KEVIN");
    expect(
      sayHello("Kevin", (name: string): string => name.toUpperCase())
    ).toBe("Hello KEVIN");
  });
});
