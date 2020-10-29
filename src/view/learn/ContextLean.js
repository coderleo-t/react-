// context上下文，当不想要一层层向下传递值时可以使用，但是不建议使用，但在第三方库中如redux就
// 使用了context,类型定义：下载prop-types,PropTypes.string.isRequred

import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class ContextLean extends Component {

   static propTypes = {
     color: PropTypes.string
   }

    // 定义子组件能获得的内容，且必须要定义其类型
    static childContextTypes = {
        color: PropTypes.string
    }

    getChildContext() {
        return {
            color: 'red'
        }
    }


    render() {
        return (
            <>
                <h2>我是他们的父组件</h2>
                <A></A>
            </>
        )
    }
}

class A extends Component {
    render() {
        return (
            <>
                <h2>我是组件A的内容</h2>
                <B></B>
            </>
        )
    }
}

class B extends Component {
    render() {
        return (
            <>
                <h2>我是组件B的内容</h2>
                <C></C>
            </>
        )
    }
}

class C extends Component {

    // 定义该组件能获得父组件的内容，且必须要定义其类型
    static contextTypes = {
        color: PropTypes.string
    }

    // 如果使用构造函数第二个函数必定为context
    // constructor(props, context) {
    //   super(props,context)
    // }


    render() {
        return (
            <h2 style={{color:this.context.color}}>我是组件C的内容</h2>
        )
    }
}