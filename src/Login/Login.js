import React,{useState} from 'react'
import '../App.css';
function Login({login,error}) {
    const [details,setDetails]=useState({name:"",email:"",password:""});
    const submitHandler=e=>{
        e.preventDefault();
        login(details);
       
    }
    return (
        <div className="login-img " style={{margin:"0px",height:"100vh", width:"100%"}} >
            <img className="login-img" src="../assets/login1.jpg" style={{height:"100vh", width:"100%",margin:"0px",backgroundColor: "rgba(240, 248, 255, 0.24)"}}/>
         
            <div className="brand-title"><span>C</span>-tech</div>
               
         <div className="more-log">
             
                 <h3 className="text-center mb-5" >Login</h3> 
                <form className="form-group" onSubmit={submitHandler} >
                {(error != "")?(<p class="text-danger text-center">{error}</p>): ""}
                <div className="mb-4 row">
   <label  class="col-sm-2 col-form-label">Name </label>
   <div className="col-sm-10">
     <input type="name" 
      class="form-control"
      id="staticName" 
      placeholder="Name"
      onChange={e=>setDetails({...details,name:e.target.value}) } 
        value={details.name}
     />
   </div>
 </div>
        <div className="mb-4  row">
   <label  class="col-sm-2 col-form-label">Email </label>
   <div className="col-sm-10">
     <input type="email" 
      class="form-control"
      id="staticEmail" 
      placeholder="Email"
      onChange={e=>setDetails({...details, email:e.target.value}) } 
      value={details.email}
     />
   </div>
 </div>
 <div className="mb-4 row">
   <label  class="col-sm-2 col-form-label">Password </label>
   <div className="col-sm-10">
     <input type="password"
      class="form-control"
       id="inputPassword"
       placeholder="Password"
       onChange={e=>setDetails({...details, password:e.target.value}) } 
      value={details.password}
/>
   </div>
 </div>
 <center><button type="submit"className="btn btn-primary">Login</button></center>
        </form>

                </div>
               
            </div>
            
        
     
    )
}

export default Login
