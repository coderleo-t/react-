import {INCREMENT, DECREMENT} from './action-type'
import {combineReducers} from 'redux'

// state为一个上一次reducer返回出来的状态，如果是第一次调用最好初始化这个状态，
// 这个reducer函数的返回值为一个新的状态,且reducer只能处理同步代码，且为纯函数

// 一个项目可能拥有多个reducer，所以需要再导入combineReducers对多个reducer进行整合
function reducer1(state = 0, actions) {
     console.log('reducer1')
  switch(actions.type) {
    case INCREMENT:
         return state + actions.payload
    case DECREMENT:
         return state - actions.payload
    default:
        return 0
  }
}

function reducer2(state = 0, actions) {
     console.log('reducer2')
  switch(actions.type) {
    case 'TEST':
         return state + 'test'
    default:
        return 0
  }
}

export default combineReducers({
     reducer1,
     reducer2
})