describe("If Statement", function () {
  it("should support in typescript", function () {
    const examValue = 90;

    if (examValue > 80) {
      console.info("Good");
    } else if (examValue > 60) {
      console.info("Not Bad");
    } else {
      console.info("Try Again");
    }
  });

  it("should support ternary operator", function () {
    const value = 80;
    const say = value >= 70 ? "Congragulations" : "Try Again";
    console.info(say);
  });

  it("should support swith statement", function () {
    function sayHello(name: string) {
      switch (name) {
        case "Kevin":
          return "Hi Kevin";
        case "Rubama":
          return "Hi Rubama";
        case "Putra":
          return "Hi Putra";
      }

      console.info(sayHello("Kevin"));
      console.info(sayHello("Rubama"));
      console.info(sayHello("Putra"));
    }
  });
});
