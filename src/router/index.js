// 下载react-router-config来向vue一样配置路由，就不需要都写组件了，这样就不会显得混乱了
// 然后可以使用react-router-config提供的renderRoutes函数渲染routes到页面上了

import Home from '../components/routeConfigComponent/Home'
import Login from '../components/routeConfigComponent/Login'
import Regist from '../components/routeConfigComponent/Regist'

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/Home",
    component: Home
  },
  {
    path: "/Regist",
    component: Regist,
    routes: [
      {
        path: "/Regist/Login",
        exact: true,
        component: Login
      }
    ]
  }
]

export default routes;