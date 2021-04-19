import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router , Switch , Route , Link,NavLink } from 'react-router-dom';
import Home from './Home';
import Cart from "./component/CartList/Cart";
import Mobiles from './component/Mobiles/Mobiles';
import Footer from "./component/Footer/Footer"
import {Provider} from "react-redux"
import store from "./Store/Store";
import CartIcon from "./component/Cart/CartIcon"; 
import OnlineProduct from './component/OnlineProduct/index'
import Login from './Login/Login'
import Laptop from './component/Lap/Laptop'
import onlinecomputer from './component/onlinecomputer/index'
import Questions from './component/Support/index';

function App() {
  
  const adminUser ={
    id:1,
    email:"admin@admin.com",
    password:"admin123"
  }
  const [user,setUser] = useState({name:"",email:""});
  const [error,setError]= useState("");
  const login = details=>{
    console.log(details);
    if(details.email === adminUser.email && details.password == adminUser.password){
      console.log("Loggin");
      setUser({
          name:details.name,
          email:details.email,
          

      });
  }
  else{
      console.log("Details do not match");
      setError("Details do not match" );
  }
  }
  const logout = ()=>{
   setUser({
    name:"",
    email:""
   });
  }
  return (
    <div>
    {
      (user.email != "") ? ( <Router>
        <div>
    
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top mb-5" style={{backgroundColor:"#00A5C4"}}>
          <Link className="navbar-brand brand-titl" style={{fontSize:"25px"}} to={"/Home/"+adminUser.id}><span style={{fontSize:"28px"}}>C</span>-tech</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav m-auto font-rubik">
                  <li className="nav-item active">
                      <Link  className="nav-link " to={"/Home/"+ adminUser.id}>Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/Mobiles">Mobiles </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/Laptops">Computers </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="/Support">Contact Us </Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to="#">Blog</Link>
                  </li>
                  
  
              </ul>
              <div>
               
              </div>
              <form action="#" class="font-size-14 font-raleway">
                  <Link to="/Cart" >
                     <CartIcon/>
                  </Link>
  
  
              </form>
              <button onClick={(logout)} className="btn  text-white ml-2" style={{backgroundColor:"#003859"}}>Logout</button>
          </div>
      </nav>
  
  
  
     </div>
    
    
    
    
    <Switch>
      <Route path="/Home/:id"  component={Home} exact/>
      <Route path="/Mobiles" component={Mobiles} exact/>
      <Route path="/Laptops" component={Laptop} exact/>
      <Route path="/Mobiles/:id" component={OnlineProduct} exact/>
      <Route path="/Laptops/:id" component={onlinecomputer} exact/>
      <Route path="/Cart"  component={Cart} exact/>
      <Route path="/Support"  component={Questions} exact/>
    </Switch>
  
  </Router>): (<Login login={login} error={error} />)
    }
</div>
   
  );
}
function AppWithStore(){
  return <Provider  store={store} >
    <App />
    <Footer />
  </Provider>
}

export default AppWithStore;
