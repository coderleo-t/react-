import React,{Component} from 'react';
import {renderRoutes} from 'react-router-config'
import {Link, Switch} from 'react-router-dom'
import routes from '../../router/index'

export default class RouterConfig extends Component {
  render() {
    return(
      <div>
        <Link to="/Home">家</Link><br/>
        <Link to="/Regist">注册</Link><br/>

        {/* 相当于渲染了所有的route */}
        <Switch>
          {renderRoutes(routes)}
        </Switch>

        {/* {renderRoutes(this.props.route.routes)} */}
      </div>
    )
  }
}