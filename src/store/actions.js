// 同步action函数返回一个对象
export const increment = (count) => ({type: 'INCREMENT', payload: count})
export const decrement = (count) => ({type: 'DECREMENT', payload: count})

// 异步action函数返回一个函数
export const decrementAsync = (count) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(count))
    }, 1000)
  }
}