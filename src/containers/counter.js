// import {connect} from 'react-redux'
import {connect} from '../utils/customer-react-redux'
import {increment, decrement, decrementAsync} from '../store/actions'
import ReactReduxLean from '../view/learn/ReactReduxLean'

// 返回一个新的组件，将此函数传的所有参数解构赋值到第二个括号所表示的组件上，
// 这是react-redux的核心函数，state代表的就是reducer里面的状态，
// 第二个参数对象就封装了所有的actions函数，这些所有的参数都会在父组件那边
// 通过解构赋值存在组件上，这样会使耦合度降低，以后只需要修改connect这里的代码就足够了
export default connect(

  // 如果管理两个reducer则需要指定是哪一个,但是在actions执行reducer时两个reducer都会执行
  state => ({count: state.reducer1}),
  {increment, decrement, decrementAsync}
)(ReactReduxLean)