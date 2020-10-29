// createStore传入一个reducer返回一个包含getState，dispatch，subscribe对象
function createStore(reducer) {
  let state,
      subs = []

  if(typeof reducer === 'function') {
    state = reducer(undefined, {type: '@redux/init'})
  } else {
    console.error('传入的reducer必须为一个函数或对象')
    return
  }

  const getState = function() {
    return state
  }
  
  const dispatch = function(action) {
    state = reducer(state, action)

    // 执行完reducer后需要自动执行subscribe包裹的函数
    subs.forEach(item => {
      item()
    })

    // 返回传入的对象
    return action
  }

  const subscribe = function(f) {
    subs.push(f)
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}


// 执行combineReducers返回一个整合后的reducer函数
function combineReducers(reducerObj) {

  return function (state, action) {
    let result = {}

    if(typeof state === 'object') {
      for( let i of Reflect.ownKeys(reducerObj)) {
        result[i] = reducerObj[i](state[i], action)
      }
    } else {

      // 初始化的时候用，每个state默认都传undefined
      for( let i of Reflect.ownKeys(reducerObj)) {
        result[i] = reducerObj[i](state, action)
      }
    }
    return result
  }
}

export {
  createStore,
  combineReducers
}