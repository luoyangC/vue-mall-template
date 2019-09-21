const getters = {
  carts: state => state.cart.carts,
  checked: state => state.cart.checked,
  checkAll: state => state.cart.checkAll,
  token: state => state.user.token,
  userName: state => state.user.name,
  userAvatar: state => state.user.avatar,
  sumNum: state => state.sum.first + state.sum.second,
  theme: state => state.app.theme,
  cache: state => state.app.cache
}
export default getters
