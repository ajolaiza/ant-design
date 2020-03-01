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
     shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
       return true;
       }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleB getsnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
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
