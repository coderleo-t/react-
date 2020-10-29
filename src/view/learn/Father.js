// 实现兄弟组件之前的传值和子孙组件的传值，这是父组件
import React,{Component} from 'react'
import Sibling from '../../components/学习组件/Sibling'
import Sibling1 from '../../components/学习组件/Sibling1'
import eventBus from '../../utils/events'

export default class Father extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: ''
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.busEmit()}}>向孙子组件传值</button>
        <Sibling msg={this.testParams}/>
        <Sibling1 showMessage={this.state.age}/>
      </div>
    )
  }

  testParams = (value) => {
    this.setState({
      age: value
    })
  }

  busEmit() {
    console.log(1111)
    eventBus.emit("handerClick", 'coderleo-t');
  }
}