
import { Tabs } from 'antd';
import React, { Component } from 'react'



const{TabPane}=Tabs;

export default class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Tabs defaultActiveKey="Home" >
    <TabPane tab="Home" key="Home">
      Home
    </TabPane>
    <TabPane tab="Products" key="Products">
      Products
    </TabPane>
    <TabPane tab="Features" key="Features">
      Features
    </TabPane>
    <TabPane tab="About us" key="About Us">
      About us
    </TabPane>
    

    </Tabs>
  
      
      </div>
    )
  }
}

