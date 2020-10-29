import React,{Component} from 'react';
export default class ChildRoute1 extends Component {
  render() {
    return(
      <div>
        我是/cart/:id路径下的组件且获取的id为：{this.props.match.params.id}
      </div>
    )
  }
}