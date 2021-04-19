import React, { Component } from 'react'
import Loading from '../Loading/Loading'
import axios from 'axios';
import {connect} from 'react-redux'
import {addToCart} from "../../Action/action";
export class OnlineProduct extends Component { 
    state ={
        /*l oading: true,
        quantity : 1, */
        loading: true,
        quantity : 1,
        mob: {}
    };
    
    
    componentDidMount(){
        
        const ids = this.props.match.params.id;
        
        axios.get("http://localhost/graduat_project/view.php")
        .then(response =>{
            this.setState({mob: response.data, loading:false});
           

        }).then(id=>{
            
           this.setState({mob: this.state.mob.find(item=> item.id ===ids)})
           
        })
        
        
            
        

    }
    increment = ()=>{
        if(this.state.quantity>=10){
            return;

        }
        this.setState({
            quantity: this.state.quantity +1
        })
    }
    decrement = ()=>{
        if(this.state.quantity<=1){
            return;

        }
        this.setState({
            quantity: this.state.quantity -1
        })
    }
    


    addToCart =(mobile)=>{
        this.props.addToCart(mobile, this.state.quantity);
    
    }
       
    render(){
        if(this.state.loading) 
        return <Loading/>
        const mobile  = this.state.mob;
   
        
     return (
            <section className="product py-3 mt-4">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-6 ">
                        <img src={"."+mobile.item_image} className="img-fluid" alt="product1"/>
                        <div className="form-row pt-4 font-size-16 font-baloo">
                            <div className="col"><button type="submit" className="btn btn-danger" style={{width:"100%"}}>Proceed to Buy</button></div>
                            <div className="col"><button onClick={()=>this.addToCart(mobile)} type="submit" className="btn btn-warning" style={{width:"100%"}}>Add to Cart</button></div>
                        </div>
                    </div>
                    <div className="col-sm-6 py-4 bg-light">
                        <h5 className="font-baloo font-size-20">{mobile.item_name}</h5>
                        <small>By {mobile.item_brand}</small>
                        <div className="d-flex">
                            <div className="rating text-warning font-size-12">
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="fas fa-star"></i></span>
                                <span><i className="far fa-star"></i></span>
                            </div>
                            <a href="#" className="px-3 font-raleway font-size-14">20222 ratings</a>
                        </div>
                        <hr className="m-0"/>


                        
                        <table className="my-3">
                            <tr className="font-raleway font-size-14">
                                <td className="px-2">M.R.P </td>
                                <td>
                                    <strike>{mobile.item_old_price}</strike></td>
                            </tr>
                            <tr className="font-raleway font-size-14">
                                <td className="px-2">Deal Price</td>
                                <td className="font-size-20 text-danger">
                                    $
                                    <span>
                                    {mobile.item_price}
                                    </span>
                                    <small className="text-dark">&nbsp;inclusive of all taxes</small>
                                </td>
                            </tr>
                            <tr className="font-raleway font-size-14">
                                <td className="px-2">You save:</td>
                                <td className="font-size-20 text-danger">
                                    $
                                    <span>
                                    {mobile.item_old_price-mobile.item_price}
                                    </span>

                                </td>
                            </tr>

                        </table>

                    
                        <div className="policy">
                            <div className="d-flex">
                                <div className="return text-center mr-5">
                                    <div className="font-size-20 my-2 color-second">
                                        <span className="fas fa-retweet border p-3 rounded-pill"></span>
                                    </div>
                                    <a href="#" className="font-raleway font-size-12">10 Days<br/>Replacement</a>
                                </div>
                                <div className="return text-center mr-5">
                                    <div className="font-size-20 my-2 color-second">
                                        <span className="fas fa-truck border p-3 rounded-pill"></span>
                                    </div>
                                    <a href="#" className="font-raleway font-size-12">FS Company<br/>Deliver</a>
                                </div>
                                <div className="return text-center mr-5">
                                    <div className="font-size-20 my-2 color-second">
                                        <span className="fas fa-check-double border p-3 rounded-pill"></span>
                                    </div>
                                    <a href="#" className="font-raleway font-size-12">1 Year<br/>Warranty</a>
                                </div>



                            </div>

                        </div>


                        <hr/>
                      
                        <div id="order-details" className="font-raleway d-flex flex-column text-dark">

                            <small>Sold by <a href="#">C-Tech</a></small>
                            <small> <i className="fas fa-map-marker-alt color-primary"></i></small>
                        </div>
                       

                        <div className="row">

                            <div className="col-6">
                               
                                <div className="color my-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="font-baloo">Color </h6>
                                        <div className="p-2 color-yellow-bg rounded-circle m-1">
                                            <button className="btn font-size-12"></button>
                                        </div>
                                        <div className="p-2 color-primary-bg rounded-circle m-1">
                                            <button className="btn font-size-12"></button>
                                        </div>
                                        <div className="p-2 color-second-bg rounded-circle m-1">
                                            <button className="btn font-size-12"></button>
                                        </div>
                                    </div>

                                </div>
                            
                            </div>
                            <div className="col-6 ">
                                <div className="qty d-flex">
                                    <h6 className="font-baloo">Qty:</h6>
                                    <div className="px-4 d-flex font-raleway justify-content-center">
                                        <button className="qty-up border bg-light" onClick={this.increment}><i className="fas fa-angle-up"></i></button>
                                        <input onChange={this.handleQuantity}  type="text"  className="qty_input border px-2 w-50 bg-light" disabled value={  this.state.quantity} placeholder="1"/>
                                        <button className="qty-down border bg-light" onClick={this.decrement}><i className="fas fa-angle-down"></i></button>
                                        </div>
                                </div>
                               
                                        <p className="text-danger" style={{width:"60px"}}>$ {mobile.item_price * this.state.quantity }</p>
                                    
                            </div>

                        </div>
                        <div className="size my-3">
                            <h6 className="font-baloo"> Size:</h6>
                            <div className="d-flex justify-content-between w-75">
                                <div className="font-rubik border p-2">
                                    <button className="btn p-0 font-size-14">4GB RAM</button>
                                </div>
                                <div className="font-rubik border p-2">
                                    <button className="btn p-0 font-size-14">16GB RAM</button>
                                </div>
                                <div className="font-rubik border p-2">
                                    <button className="btn p-0 font-size-14">64GB RAM</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-12">
                        <h6 className="rubik">Product Description</h6>
                        <hr/>
                        <p className="font-raleway font-size-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque, repellat beatae et sunt ipsam molestiae quasi officia deserunt voluptate.</p>
                        <p className="font-raleway font-size-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque itaque, repellat beatae et sunt ipsam molestiae quasi officia deserunt voluptate.</p>
                    </div>
                </div>
            </div>
        </section>
        )
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity)),
    };
}

export default connect(null,mapDispatchToProps)(OnlineProduct)
