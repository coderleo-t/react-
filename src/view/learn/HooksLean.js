// hooks函数的使用，也可以利用现成的hooks函数自定义一个hooks函数，且自定义的hooks函数
// 必须以use开头

import React, {useState, useEffect, useContext, createContext, useReducer, useMemo, useRef, useCallback} from 'react'

 // 创建一个context组件
const contextCount = createContext()
function Example() {
  // useState传入一个值返回一个长度为2的数组，数组的第一位为传进去的值，第二位为修改此值的函数
  const [ count, setCount ] = useState(0)

  // 直接用可以代替componentDidMount和componentDidUpate
  useEffect(() => {
    // 当count值发生改变时，这个语句会重新执行
    console.log(`当前数为${count}`)

  // 当此函数返回一个函数就为解绑函数，相当于代替了componentDidUnmount
    return () =>{
      console.log('我走了！')
    }

    // 当里面第二个参数数组里的数发生改变时就会执行解绑函数，如果为空数组，则在真正的组件销毁才会执行
    // 解绑函数，如果没有第二个参数只要useEffect执行都会执行解绑函数
  }, [count])

  // 可以结合useReducer和useContext代替redux
  const [newState, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      default:
        return state
    }
  }, 0)
  console.log(newState, dispatch)

  // 提升性能的作用，useCallback会返回一个函数的 memoized（记忆的） 值；k就代表第一个参数函数
  const k = useCallback((a) => {
    setCount(() => a)
  }, [count])
  console.log(k)

  // 这个可以解决useState性能损耗问题，因为他没有shouldComponentUpdate生命周期
  // 所以就会造成每次都会更新,下面就是只有在count发生变化的时候才会执行第一个函数参数的代码
  useMemo(() => {
    return 1
  }, [count])

  // 可以通过在其他标签上写ref={currentDom}，这样currentDom就会有当前标签的很多属性
  const currentDom = useRef(null)
  console.log(currentDom)


  return (
    <div>
      我是hooks组件里的内容

      <contextCount.Provider count={count}>
        <A/>
      </contextCount.Provider>
    </div>
  )
}

function A() {
  const count = useContext(contextCount)
  return (
  <p>当前数为{count}</p>
  )
}

export default Example