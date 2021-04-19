import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'    
export class About extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="img-fluid about-img" src="../assets/blog/blog3.jpg" />

                    </div>
                    <div className="col-sm-6 text-center bg-white text-about">
                        <h3 className="mt-5">C-tech</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore nostrum maiores, adipisci iure ex, vero, quasi at ducimus id amet. Aliquid, eum quibusdam! Vel corrupti magnam eligendi exercitationem perspiciatis voluptate sunt consequuntur porro ratione! Hic molestiae perspiciatis nisi quod sapiente ab excepturi saepe? Similique earum a officia repellendus rem provident molestias ex magnam aut eum fugiat, ipsum, consectetur minus.</p>

                    </div>




                </div>

                
            </div>
        )
    }
}

export default About
