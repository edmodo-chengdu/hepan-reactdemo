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
  expect(mockCallback.mock.instances.length).toBe(2);
  test("true", () => {
    expect(true).toBe(true)
  })
});
describe("mock函数注入值", () => {
  let mockDemo = jest.fn();
  // 设置mock函数的返回值
  mockDemo.mockReturnValueOnce(true).mockReturnValue(false);
  console.log(mockDemo());
  console.log(mockDemo());
});
test('mock function', () => {
  const sum = jest.fn();
  let val = sum(1, 2);
  console.log(val);
});
test('mock function 的模拟实现', () => {
  const sum3 = jest.fn().mockImplementation(
    (a, b) => {
      return a + b;
    }
  );
  expect(sum3(4, 5)).toBe(9);
});
