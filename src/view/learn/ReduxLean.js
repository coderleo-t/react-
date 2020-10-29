import React,{Component} from 'react';
import * as actions from '../../store/actions'

export default class ReduxLean extends Component {
  render() {
    return(
      <div>
        <span>测试不用react-redux：当前显示数字：{this.props.store.getState().reducer1}</span>&nbsp;&nbsp;
        <button onClick={() => this.increment()}>加一</button>&nbsp;&nbsp;
        <button onClick={() => this.decrement()}>减一</button>
      </div>
    )
  }
  increment() {
    this.props.store.dispatch(actions.increment(3))
    // 使用this.props.store.getState()可以获取最新的状态
    console.log(this.props.store.getState())
  }

  decrement() {
    this.props.store.dispatch(actions.decrement(9))
    console.log(this.props.store.getState().reducer1)
  }
}