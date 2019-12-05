describe("测试foreach函数", () => {
  function foreach(items, callback) {
    items.forEach(val => {
      callback(val);
    })
  }

  let mockCallback = jest.fn((x) => {
    return x + 1;
  });
  foreach([0, 1], mockCallback);
  expect(mockCallback.mock.calls.length).toBe(2);
  // calls[0][0]：表示第一次调用时的第一个参数，[0][1]:表示第二个参数
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[1].value).toBe(2);
  test("true", () => {
    expect(true).toBe(true)
  })
});
