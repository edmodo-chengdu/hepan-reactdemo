// reselect是用来避免数据计算，优化性能。下面案例中只有当products和percent发生变化时，才会重新去计算结果
const {createSelector} = require('reselect');
const state = {
  products: [
    {name: 'orange', price: 5},
    {name: 'apple', price: 5},
  ],
  percent: 0.9
};

// const percent = 0.9;

// input-selectors函数
function getProducts(state) {
  return state.products
}

function getPercent(state, percent) {
  return percent
}

// 创建私有的creator。
function createPrivateCreator() {
  // 第一个参数需要为input-selector数组或者单个函数
  // input-selector函数执行的结果将作为transform函数的参数
  // 当getProducts和getPercent返回的值一样时（用的是"==="做的比较），transform函数不调用，会直接返回保存的结果。
  return createSelector([getProducts, getPercent], (products, percent) => {
    return products.reduce((count, product) => {
      return count + (product.price * percent)
    }, 0)
  });
}

// creator函数也可以作为其他selector函数的input-selector
function doubleTax() {
  return createSelector(
    [createPrivateCreator(), getPercent],
    (result, percent) => {
      return result * percent;
    }
  )
}

console.log(createPrivateCreator()(state, 0.9));
console.log(doubleTax()(state, 0.9));
