describe("Array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["kevin", "eko", "joko"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);
  });

  it("should support tupple", function () {
    const kata: readonly [string, string, number] = ["wew", "wow", 8];
    console.info(kata);
    console.info(kata[0]);
    console.info(kata[1]);
  });
});
