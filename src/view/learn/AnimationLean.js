// react过渡动画的使用：需下载插件react-transition-group，它包含4个组件
// Transition，CSSTransition，SwitchTransition，TransitionGroup
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';
import { Card, Avatar, Button } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React,{Component} from 'react';
import '../../assets/animation.css'

const { Meta } = Card;

export default class AnimationLean extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowCard: true,
      isOn: true,
      friends: []
    }
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={e => this.setState({isShowCard: !this.state.isShowCard})}>显示/隐藏</Button>

        {/* in表示是否显示 */}
        <CSSTransition in={this.state.isShowCard}

            // 进场和退场类名前面会自动加上card-
                       classNames="card"
                       timeout={1000}

                      //  该组件会在执行退出动画结束后被移除掉
                       unmountOnExit={true}

                      //  下面为动画生命周期函数
                       onEnter={el => console.log("进入动画前")}
                       onEntering={el => console.log("进入动画")}
                       onEntered={el => console.log("进入动画后")}
                       onExit={el => console.log("退出动画前")}
                       onExiting={el => console.log("退出动画")}
                       onExited={el => console.log("退出动画后")}
                      >
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>

        <SwitchTransition mode="out-in">
          <CSSTransition classNames="btn"
                        timeout={500}

                        // 如果外面为SwitchTransition包裹的则需要使用key代替in表示现在组件处在哪种状态
                        key={this.state.isOn ? "on" : "off"}>
            {
            <button onClick={this.btnClick.bind(this)}>
              {this.state.isOn ? "on": "off"}
            </button>
          }
          </CSSTransition>
        </SwitchTransition>


        <TransitionGroup>
          {
            this.state.friends.map((item, index) => {
              return (
                <CSSTransition classNames="friend" timeout={300} key={index}>
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={e => this.addFriend()}>+friend</button>

      </div>
    )
  }

  btnClick() {
    this.setState({isOn: !this.state.isOn})
  }

  addFriend() {
    this.setState({
      friends: [...this.state.friends, "coderwhy"]
    })
  }

}