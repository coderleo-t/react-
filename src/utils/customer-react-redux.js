import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Provider extends Component {

  // 声明使哪些属性定义了类型推断
  static propTypes = {
    store: PropTypes.object
  }

  // 定义context向外暴露的内容的类型
  static childContextTypes = {
    store: PropTypes.object
  }

  // 定义context使这个组件包裹的每一个组件都能访问此组件上的内容
  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return (
      // 将所有子标签返回，本身没有什么渲染的
      // 如果没有子标签：undefined
      // 如果只有一个子标签：对象，
      // 多个子标签：数组
      this.props.children
    )
  }
}


// connect函数返回一个函数
function connect(mapStateToProps, mapDispatchToProps) {

  // 返回的函数再返回一个组件
  return (WrapComponent) => {

    // 返回一个组件的时候可以不用带类名
    return class extends Component {

      static contextTypes = {
        store: PropTypes.object
      }

      // 如果使用构造函数第二个函数必定为context
      constructor(props,context) {
        super(props, context)

        // 获取store对象获得state
        const state = context.store.getState()
        const stateProps = mapStateToProps(state)

        const dispatchProps = this.bindActionCreators(mapDispatchToProps)
        
        this.state = {
          ...stateProps
        }

        this.dispatchProps = dispatchProps
      }

      render() {
        return (
          // 最后会渲染穿过来的组件以及带上穿过来的参数
          <WrapComponent {...this.state} {...this.dispatchProps}></WrapComponent>
        )
      }

      componentDidMount() {
        // 然后更新state就可以实现重新渲染
        this.context.store.subscribe(() => {
          this.setState({
            ...mapStateToProps(this.context.store.getState())
          })
        })
      }

      bindActionCreators = (actions) => {
        let dispatchObject = {}

        // 遍历每一个action名，将action名与其dispatch对应，也可以使用reduce高阶函数完成下面操作
        for(let i of Reflect.ownKeys(actions)) {
          // 下面函数叫透传函数，第一个函数讲参数打包，第二个函数里面分解
          dispatchObject[i] = (...value) => {
            const dispatchParams = actions[i](...value)
            // 处理异步actions的情况
            // if(typeof dispatchParams === 'function') {
              // dispatchParams(this.context.store.dispatch)
            // } else {
              // 执行dispatch后会自动执行subscribe
              
              // redux-thunk会自动处理函数的情况
              this.context.store.dispatch(dispatchParams)
            // }
          }
        }

        return dispatchObject
      }

    }
  }
}

export {
  Provider,
  connect
}