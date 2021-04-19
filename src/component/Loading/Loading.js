import React, { Component } from 'react'

export class Loading extends Component {
    render() {
        return (
            <div>
            <div class="d-flex justify-content-center" style={{marginTop:"30vh"}}>
     <div class="spinner-border" role="status">
       
     </div>
     <br/>
     
    
   </div>
   <h5 className="text-center" style={{marginBottom:"30vh"}}>Loading...</h5>
   
        </div>
     
        )
    }
}

export default Loading
