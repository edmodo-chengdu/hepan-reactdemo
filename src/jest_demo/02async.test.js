test("测试回调函数", done => {
  function demo1(callback) {
    callback(123);
  }

  function callback(data) {
    expect(data).toBe(123);
    done();
  }

  demo1(callback);
});

test("测试promise1", () => {
  let promise = new Promise(((resolve, reject) => {
    resolve(123);
  }));
  return promise.then(data => {
    expect(data).toBe(123);
  })
});

test("测试promise2", () => {
  let promise = new Promise(((resolve, reject) => {
    resolve(123);
  }));
  expect(promise).resolves.toBe(123);
});

test("测试async函数1", async () => {
  let promise = new Promise(((resolve, reject) => {
    resolve(123);
  }));
  let a = await promise;
  expect(a).toBe(123);
});

test('测试async函数2', async () => {
  let promise = new Promise(((resolve, reject) => {
    resolve(123);
  }));
  await expect(promise).resolves.toBe(123);
});
