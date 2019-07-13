const getters = {
  carts: state => state.cart.carts,
  checked: state => state.cart.checked,
  checkAll: state => state.cart.checkAll,
  userName: state => state.user.name,
}
export default getters
