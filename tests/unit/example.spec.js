describe("Example Component test", () => {
  test("should be greater than 10", () => {
    let value = 5;
    value = value + 10;
    expect(value).toBeGreaterThan(10);
  });
});
