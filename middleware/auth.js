// 鉴权中间件
export default function({ route, store, redirect }) {
  if (!store.state.user.token) {
    return redirect(`/login?redirect=${route.name}`)
  }
}
