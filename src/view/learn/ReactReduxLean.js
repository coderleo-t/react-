// 如果光是使用redux那么和react耦合度太高了，
// 所以需要react-redux用于简化react应用中使用redux,
// 主要使用Provider组件和connect方法,connect第一个参数为函数，第二个参数为对象

import React,{Component} from 'react';

export default class ReactReduxLean extends Component {
  render() {
    return(
      <div>
        <span>测试使用react-redux：当前显示数字：{this.props.count}</span>&nbsp;&nbsp;
        <button onClick={() => this.increment()}>加一</button>&nbsp;&nbsp;
        <button onClick={() => this.decrement()}>减一</button>
        <button onClick={() => this.decrementAsync()}>异步加一</button>
      </div>
    )
  }
  increment() {
    // 使用react-redux省略了写dispatch，全部参数都通过父组件那边传过来了
    this.props.increment(5)
  }

  decrement() {
    this.props.decrement(9)
  }

  decrementAsync() {
    this.props.decrementAsync(1)
  }
}