import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import MyNavLink from '../common/MyNavLink'
import ShoeRoute from './ShoeRoute'
export default class ChildRoute extends Component {
  render() {
    return(
      <div>
        我是/goods路径下的组件
        <MyNavLink to='/goods/shoe'>点击购买鞋子</MyNavLink>

        <Switch>
          <Route path='/goods/shoe' component={ShoeRoute}/>
        </Switch>
      </div>
    )
  }
}