// redux本身不支持异步代码，但可以通过下载中间件(redux-thunk)支持
// 下载redux-devtools-extension再引入composeWithDevtools函数，用它来观看redux状态
import {composeWithDevTools}  from 'redux-devtools-extension'

import { applyMiddleware,createStore } from 'redux'
import reducers from './reducer'

// 让dispatch不仅可以处理对象还可以处理函数
import thunk from 'redux-thunk'


export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))