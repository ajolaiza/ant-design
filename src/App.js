
import React, { Component } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import'antd/dist/antd.css';
import LifecycleA from './LifecycleA'
import LifecycleB from './LifecycleB'
import FragmentDemo from './FragmentDemo'

import Table from './Table'
import PureComp from './PureComp';
import ParentComp from './ParentComp';
import RefsDemo from './Components/RefsDemo';
export default class App extends Component {
  render() {
    return (
      <div className="App-container">
        <RefsDemo/>

     
      {/* <FragmentDemo/> */}
     {/* <ParentComp/> */}
      </div>
    )
  }
}


