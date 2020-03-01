import React, { Component,PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

 class ParentComp extends PureComponent {
     constructor(props) {
         super(props)
     
         this.state = {
             name:'ankit'
              
         }
     }
     componentDidMount(){
         setInterval(()=>{
             this.setState({
                 name:'ankit'
             })
         },2000)

     }
     
    render() {
        console.log('*****parentcomp render**')
        return (
            <div>
            
                ParentComp
                <MemoComp name={this.state.name}/>
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this. state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
