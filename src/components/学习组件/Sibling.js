// 实现兄弟组件之前的传值和子孙组件的传值，这是兄弟组件
import React,{ Component } from 'react';

export default class Sibling extends Component {
  render() {
    return(
      <div>
        sibling
        <button onClick={() => {this.emitParams()}}>点击向兄弟组件传值</button>
      </div>
    )
  }

  emitParams() {
    this.props.msg(99)
  }
}