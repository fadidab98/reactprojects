import React, { Component } from 'react'
import '../../App.css'
import axios from 'axios'



import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css'; 
 
export class Nav extends Component {
    state = {
        banners:[]
    }
    
    componentDidMount(){
        axios.get("http://localhost/graduat_project/bannerView.php")
        .then(response =>{
            this.setState({banners: response.data})
        })

    }
    
    render() {
        
        return (
            <div >  
           
                      <div class='container-fluid mt-4' >      
          
                       <div className="row title">      
          
                         
            
                   </div>  
           
                   </div>  
         
                   <div  >            
           
                    <OwlCarousel items={1}   style={{minHeight:"80vh",width:"100"}}
          
                      className="owl-theme"  
                      autoplay 
                      nav
                      dots
                      loop
                      autoplayTimeout= "2000"
            
               
            
                       >  
                      {this.state.banners.map((ban)=>{
                     return(
                   
                        <div  key={ban.bid} {...ban}><img style={{padding:"0px"}}   className="img container-fluid" src={ban.banner_image} alt={ban.banner_name} style={{height:"80vh",width:"100%",padding:"0px",margin:"0px"}}/></div>  
                        
                        )
                
                })}
            
          
                    
            
                  </OwlCarousel>  
           
                  </div>  
               
           
                  </div>  
        )
    }
}

export default Nav
