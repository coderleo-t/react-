// 路由里面的所有所有方法和匹配到的字符以及对象都藏在props对象上
// NavLink路由组件和Link组件不同的是NavLink会在活跃时添加活跃的类名
// 自定义一个路由里面的NavLink，嵌套路由

import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import ChildRoute from '../../components/学习组件/ChildRoute'
import ChildRoute1 from '../../components/学习组件/ChildRoute1'
import MyNavLink from '../../components/common/MyNavLink'

export default class RouterLean extends Component {
  render() {
    return(
      <div>
        <MyNavLink to='/goods'>点击切换页面1</MyNavLink><br/>
        <MyNavLink to='/cart/99'>点击切换页面2</MyNavLink>

        <Switch>
          {/**如果加上exact属性就不能显示孙子路由了 */}
          <Route path='/goods' component={ChildRoute}></Route>
          <Route path='/cart/:id' component={ChildRoute1}></Route>
        </Switch>
      </div>
    )
  }
}