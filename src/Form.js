// import React, { Component } from 'react'

//  class Form extends Component {
//      constructor(props) {
//          super(props)
     
//          this.state = {
//              username:'',
//              comments:'',
//              topic:'react'
              
//          }
//      }
//      handleUsernameChange=(event)=>{
//          this.setState({
//              username:event.target.value
//          })


//      }
//      handleCommentsChange=(event)=>{
//          this.setState({
//              comments:event.target.value
//          })
//      }
//   handleTopicChange=event=>{
//       this.setState({
//           topic:event.target.value
//       })
//   }

//   handleSubmit=(event)=>{
//      alert(`${this.state.username} ${this.state.comments}${this.state.comments} `)
//     event.preventDefault()
//     }
//     render() {
//         const {username,comments,topic}=this.state
//         return (
//             <form onSubmit={this.handleSubmit}>
//             <div className="App">

//                 <label >Username</label>
//                 <input type="text" value={username}onChange={this.handleUsernameChange}/>
//                 </div>
//                 <div>
//                     <label>Comments</label>
//                     <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
//                 </div>
//                 <div>
//                     <label>Topic</label>
//                     <select value={topic} onChange={this.handleTopicChange}>
//                         <option value="react">React</option>
//                         <option value="anguar">Angular</option>
//                         <option value="vue">Vue</option>
//                     </select>
//                     <button  type="submit" >submit</button>
//                 </div>
//                 </form>
                
            
//         )
//     }
// }

// export default Form
