import React, { Component } from 'react'
import './App.css'

import Googlemap from './component/area/Googlemap'
import Nav from './component/Navbar/NavBar'

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import About from './DataAbout/About'
export class Home extends Component {
   
    render() {
        
        return (
            <main className="bg-light" >  
           
                    
                 <section style={{minHeight:"90vh",width:"100%"}}>
                     <Nav/>
                     
                 </section>
                 <section>
                   <div className="container">
                   <About/>
                   </div>
                 </section>
              <section className="locationMap" >
                 <h3>Our Location</h3> 
                  <Googlemap/>

              </section>
           
                  </main>  
        )
    }
}

export default Home
