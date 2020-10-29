const event ={}
//就是一个字符串，对应一组回调函数
//callback就是事件对象的回调函数
export const $on=(eventName,callback)=>{  //eventName就是事件名
    if(!event[eventName]){  //用自定义事件建立一个数组
        event[eventName] =[]
    }
    event[eventName].push(callback)
}

export const $emit =(eventName,data)=>{
    if(!event[eventName]) return;
    event[eventName].forEach((cb)=>{  
        //用这个字符串，找到存储回到函数的数组，并依次执行数组里的回调函数
        cb(data);
    })
}

export const $off=(eventName,callback)=>{
    if(!callback){  //不传回调，把所有的这个事件对应的回调都清掉
        event[eventName]=null;
    }
    else{  //只清除这个事件，这个回调函数

        event[eventName]=event[eventName].filter((cb)=>{
            return cb!==callback
        })
    }
}