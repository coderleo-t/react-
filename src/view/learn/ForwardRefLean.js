import React, { useRef, forwardRef, useState, useImperativeHandle, useLayoutEffect, useEffect } from 'react';

// 通过forwardRef可以将ref转发到子组件；
const HYInput = forwardRef(function (props, ref) {
  const inputRef = useRef();

  // 接收父组件传过来的ref，当使用ref.current时只会暴露第二个参数的这两个对象
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    printHello: () => {
      console.log("Hello World")
    }
  }))


  return <input type="text" ref={inputRef}/>
})

export default function ForwardDemo() {
  const inputRef = useRef();
  const [count, setCount] = useState(0);

  // useEffect会在渲染的内容更新到DOM上后执行，不会阻塞DOM的更新；
  // useLayoutEffect会在渲染的内容更新到DOM上之前执行，会阻塞DOM的更新；
  useEffect(() => {
    if(count == 0) {
      setCount(Math.random()*200)
    }
  }, [count])
  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random()*200)
    }
  }, [count]);

  return (
    <div>
      {/* 间接获得了子组件的dom */}
      <HYInput ref={inputRef}/>
      <button onClick={e => inputRef.current.focus()}>聚焦</button>
      <button onClick={e => inputRef.current.printHello()}>Hello World</button>
      <h2>当前数字: {count}</h2>
      <button onClick={e => setCount(0)}>随机数</button>
    </div>
  )
}