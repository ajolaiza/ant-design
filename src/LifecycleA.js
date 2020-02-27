import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"Vishaws"
         }
         console.log('LifecycleA constructor')
     }
     
     static getDerivedStateFromProps(props,state){
         console.log('LifecycleA getDerivedStateFromProps')
     }
     componentDidMount(){
         console.log('LifecycleA compopnentDidMount')

     }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
            <div> LifecycleA</div>
            <LifecycleB/>
            </div>
            

        )
    }
}

export default LifecycleA
