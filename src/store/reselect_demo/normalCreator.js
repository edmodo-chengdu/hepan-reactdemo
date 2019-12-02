// reselect是用来避免数据计算，优化性能。下面案例中只有当products和percent发生变化时，才会重新去计算结果

const {createSelector} = require('reselect');
const state = {
  products: [
    {name: 'orange', price: 5},
    {name: 'apple', price: 6},
  ],
  percent: 0.9
};

function getProducts(state) {
  return state.products
}

function getPercent(state) {
  return state.percent
}

// 创建私有的creator。
function createPrivateCreator() {
  return createSelector([getProducts, getPercent], (products, percent) => {
    return products.reduce((count, product) => {
      return count + (product.price * percent)
    }, 0)
  });
}

console.log(createPrivateCreator()(state));
