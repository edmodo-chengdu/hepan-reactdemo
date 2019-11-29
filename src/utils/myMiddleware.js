// 打印日志中间件
function applyLog(store) {
  const self = store.dispatch;
  store.dispatch = function (action) {
    console.log(store.getState());
    console.log(action);
    let result = self(action);
    console.log(store.getState());
    return result;
  }
}

// 获取错误报告日志中间件
function getErrorLog(store) {
  const self = store.dispatch;
  store.dispatch = function (action) {
    try {
      let result = self(action);
      return result;
    } catch (e) {
      // 把引起错误的action保存起来
      localStorage.setItem(action.type, JSON.stringify(action));
      console.log(e);
    }
  }
}

/*** 改写上面,实现链式中间件 ***/

// 打印日志中间件
function applyLogLink(store) {
  const self = store.dispatch;
  return function (action) {
    console.log(store.getState());
    console.log(action);
    let result = self(action);
    console.log(store.getState());
    return result;
  }
}

// 获取错误报告日志中间件
function getErrorLogLink(store) {
  const self = store.dispatch;
  return function (action) {
    try {
      let result = self(action);
      return result;
    } catch (e) {
      // 把引起错误的action保存起来
      localStorage.setItem(action.type, JSON.stringify(action));
      console.log(e);
    }
  }
}

// 应用中间件函数

function applyMiddlewareLink(store, middlewares) {
  let list = middlewares.slice();//复制中间件列表
  list.forEach(middleware => {
    // 依次替换dispatch函数
    store.dispatch = middleware();
  })
}

/*** 改写上面实现究极方法 ***/
const finalApplyLog = store => self => action => {
  console.log(store.getState());
  console.log(action);
  let result = self(action);
  console.log(store.getState());
  return result;
};

const finalGetErrorLog = store => self => action => {
  try {
    let result = self(action);
    return result;
  } catch (e) {
    // 把引起错误的action保存起来
    localStorage.setItem(action.type, JSON.stringify(action));
    console.log(e);
  }
};

function FinalApplyMiddleware(store, middlewares) {
  let list = middlewares.slice();//复制中间件列表
  let dispatch = store.dispatch;
  // 采用这种方式store的dispatch不会发生改变
  list.forEach(middleware => {
    // 每次循环生成新的dispatch给下一个中间件使用
    dispatch = middleware(store)(dispatch)
  });
  // 循环结束我们可以得到最终的dispatch,最后再去替换掉store中的dispatch
  return {...store, dispatch};// 返回了一个新的store
}
