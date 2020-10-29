// 必须使用同一个eventsBus对象，所以需要进行封装
import {EventEmitter} from 'events'
const eventBus = new EventEmitter()
export default eventBus