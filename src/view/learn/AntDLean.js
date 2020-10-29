import React,{Component} from 'react';
import {Button} from 'antd'
export default class AntDLean extends Component {
  render() {
    return(
      <>
        <span>以下为antd-ui的使用</span><br/>
        <Button type='ghost'>test</Button>
      </>
    )
  }
}