import React,{Component} from 'react';
import eventBus from '../../utils/events'

export default class Grandchildren extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }
  render() {
    return(
      <div>
        <span>爷爷组件传过来的值为：{this.state.message}</span>
      </div>
    )
  }

  componentDidMount() {
    eventBus.addListener('handerClick',(msg) => {this.handerClick(msg)})
  }

  handerClick(msg) {
    this.setState({
      message: msg
    })
  }

  
}