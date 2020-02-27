import React, { Component } from 'react'


 class LifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:"Vishaws"
         }
         console.log('LifecycleB constructor')
     }
     
     static getDerivedStateFromProps(props,state){
         console.log('LifecycleA getDerivedStateFromProps')
     }
     componentDidMount(){
         console.log('LifecycleB compopnentDidMount')

     }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifecycleB

            </div>
        )
    }
}

export default LifecycleB
