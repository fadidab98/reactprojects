import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return ( <div style={{marginTop:""}}>
           
         <footer id="footer " className="bg-dark text-white py-5  " >
            <div className="container">
                <div className="row ">
                    <div className="col-lg-3 col-12 ">
                        <h4 className="font-rubik font-size-20 ">C-Tech</h4>
                        <p className="font-size-20 font-raleway text-white-50 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut harum sapiente nemo veritatis deserunt, tempore in consectetur repellendus. Ducimus, iusto?</p>
                    </div>
                    <div className="col-lg-4 col-12 ">
                        <h4 className="font-rubik font-size-20 ">Newsletter</h4>
                        <form className="form-row ">
                            <div className="col ">
                                <input type="text " className="form-control " placeholder="Email "/>
                            </div>
                            <div className="col ">
                                <button type="submit " className="btn btn-primary mb-2 ">Subscribe</button>
                            </div>
    
                        </form>
                    </div>
                    <div className="col-lg-2 col-12 ">
                        <h4 className="font-rubik font-size-20 ">Information</h4>
                        <div className="d-flex flex-column flex-wrap ">
                            <a href="# " className="font-raleway font-size-14 text-white-50 pb-1 ">About Us</a>
                            <a href="# " className="font-raleway font-size-14 text-white-50 pb-1 ">Delivery Information</a>
                            <a href="# " className="font-raleway font-size-14 text-white-50 pb-1 ">Privacy Policy</a>
                            <a href="# " className="font-raleway font-size-14 text-white-50 pb-1 ">Terms & conditions</a>
                        </div>
    
    
                    </div>
                    <div className="col-lg-2 col-12 ">
                        <h4 className="font-rubik font-size-20 ">Account</h4>
                        <div className="d-flex flex-column flex-wrap ">
                            <a href="# " className="font-raleway font-size-14 text-white-50 pb-1 ">My Account</a>
                            <a href="# " className="font-raleway font-size-14 text-white-50 pb-1 ">##</a>
                            <a href="# " className="font-raleway font-size-14 text-white-50 pb-1 ">##</a>
                            <a href="# " className="font-raleway font-size-14 text-white-50 pb-1 ">##</a>
                        </div>
    
    
                    </div>
                </div>
            </div>
    
    
        </footer>
        <div className="copyright text-center bg-dark  text-white py-2">
        <p className="font-raleway font-size-14">&copy; 2020. Desing By
            <a href="https://www.npmjs.com/package/react-router-dom" className="color-second">FS company</a>
        </p>
    </div>
      </div>
        )
    }
}

export default Footer
