
// import { Layout } from 'antd';
// import { Typography } from 'antd';
// import { Avatar } from 'antd';
// import { Menu } from 'antd';

// const{Header,Footer,Sider,Content}=Layout;
// const{Title}=Typography
// const { SubMenu } = Menu;




// function App() {
//   return (
//     <div className="App">
//      <Layout>

//      <Header style={{padding:'10px'}}>
//      <Avatar style={{float:'right'}} src='/pic1.png'  />
//      <Title style={{color:'white'}}level={3}>Guidelines and Resources</Title>
//      </Header>
     
//       <Layout>
//       <Sider style={{background:'red'}}>
//          slider
//        </Sider> 
//       <Menu>
//         <Menu.item key='Dashboard'>
//           Dashboard
//         </Menu.item>
//         <SubMenu>
//           <Menu.ItemGroup title="About us">
//             <Menu.Item key='location 1'>
//               Location
//             </Menu.Item>
//             <Menu.Item key='location 2'>
//               Location2
//             </Menu.Item>


//           </Menu.ItemGroup>

//         </SubMenu>
//       </Menu>

//       </Layout>
//       <Layout>
        
//        <Content>Content</Content>
//        <Footer>Footer</Footer>
//      </Layout>
// </Layout>
     
      

    
//     </div>
//   );
// }

// export default App;
import React, {Component} from 'react'
import './App.css';
import Form from './Form'
import Lifecycle from './Lifecycle'
import LifecycleA from './LifecycleA'
class App extends Component{
  render(){
    return(

      <div className="App">
        <Form/>
        <Lifecycle/>
        <LifecycleA/>

      </div>
    )
  }
}
export default App