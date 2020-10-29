// 使用refs获取dom元素的两种书写形式

import React,{Component} from 'react';
export default class RefsLean extends Component {
  render() {
    return(
      <div>
        <input placeholder='输入内容1' ref='testInput'/>&nbsp;&nbsp;
        <button onClick={() => this.getInput1()}>点击获取输入框1的值</button>&nbsp;&nbsp;

        {/**jsx语法使用ref时需要写一个函数，参数为当前dom元素 */}
        <input placeholder='输入内容2' ref={i => this.input = i}/>&nbsp;&nbsp;
        <button onClick={() => this.getInput2()}>点击获取输入框2的值</button>
      </div>
    )
  }

  getInput1() {
    // 第一种方式使用类似vue的方式获取dom
    alert(this.refs.testInput.value)
  }

  getInput2() {
    // 第二种方式使用在组件对象直接挂载dom的方式获取，推荐使用这种方式
    alert(this.input.value)
  }
}