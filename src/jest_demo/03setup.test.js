// 在每次测试调用
beforeEach(() => {
  localStorage.setItem("name", "tom")
});
// 在每次测试完毕调用
afterEach(() => {
  localStorage.removeItem("name");
});
test("获取名字", () => {
  function demo() {
    return localStorage.getItem("name");
  }

  expect(demo()).toBe("tom");
});
