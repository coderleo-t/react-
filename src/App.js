import React from 'react';
import Father from './view/learn/Father'
import {BrowserRouter} from 'react-router-dom'
import RouterLean from './view/learn/RouterLean'
import AntDLean from './view/learn/AntDLean'
import RefsLean from './view/learn/RefsLean'
import ReduxLean from './view/learn/ReduxLean'
import {store} from './store/index'
// import {Provider} from 'react-redux'
import {Provider} from './utils/customer-react-redux'
import ReactReduxContainer from './containers/counter'
import AnimationLean from './view/learn/AnimationLean'
import ContextLean from './view/learn/ContextLean'
import RouterConfig from './view/learn/RouterConfig'
import HooksLean from './view/learn/HooksLean'
import ForwardRefLean from './view/learn/ForwardRefLean'


function App() {
  return (
    <React.Fragment>
      <Father/>
      <BrowserRouter basename='/store'>
        <RouterLean/>
      </BrowserRouter>
      <AntDLean/>
      <RefsLean/>
      <ReduxLean store={store}/>

      {/* 这样使用就只用使用Provider管理，只要state改变了Provider标签下的内容会自动再次渲染 */}
      <Provider store={store}>
        <ReactReduxContainer/>
      </Provider>

      <AnimationLean />
      <ContextLean />

      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>

      <HooksLean />
      <ForwardRefLean/>
    </React.Fragment>
  );
}

export default App;
