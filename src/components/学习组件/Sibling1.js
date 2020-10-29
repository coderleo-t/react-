// 实现兄弟组件之前的传值和子孙组件的传值，这是兄弟组件

import React,{Component} from 'react';
import Grandchildren from './Grandchildren'

export default class Sibling1 extends Component {
  render() {
    return(
      <div>
        <span>兄弟组件传过来的内容为：{this.props.showMessage}</span>
        <Grandchildren/>
      </div>
    )
  }



}