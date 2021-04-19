import React, { Component } from 'react'
import MobileItem from '../Cart/index'
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import {clearCart} from "../../Action/action";
import Modal from '../ModalBuy/index'


export class Cart extends Component {
    
    placeOrder = () => {
       
        
        this.props.clearCart();
        alert(`Congratuations, We have received your order, you will receive it in two days the items is ${this.props.cartItems.length} and the price is ${this.props.total} `);
        
      
    };
    placeOrder1 = () => {
       
        
        this.props.clearCart();
        alert(`Sorry No Item Added `);
        
      
    };
    
    
    render() {
        if(this.props.cartItems.length===0){
           return (
             
            <div>
            <section id="cart" className="py-3 mt-4">
        <div className="container-fluid w-75"><br/>
            <h5 className="font-baloo font-size-20 mt-4">Shopping Cart</h5>

           
            <div className="row">

                <div className="col-sm-9">
                   
                <div className="text-danger text-center">
                    <h4>No item add</h4>
                </div>
                    


                </div>
               
                <div className="col-sm-3">
                    <div className="sub-total text-center mt-2 border">
                        <h6 className="font-size-12 font-raleway text-success py-3"><i className="fas fa-check"></i> order is eligible for FREE Delivery</h6>
                        <div className="border-top py-4">
                            <h5 className="font-baloo font-size-20">SubTotal {this.props.cartItems.length} items &nbsp;
                                <span className="text-danger">$ <span  id="deal-price">{this.props.total}</span></span>
                            </h5>
                            
                            
                            
                        <button onClick={this.placeOrder1} type="submit" className="btn btn-warning mt-3">Proceed to Buy</button>
                        
                        
                        
                        
                        </div>
                    </div>

                </div>
            </div>
        </div>
       
    </section>

       </div> 
          )

        }
        else{
        return (
           <div>
                <section id="cart" className="py-3 mt-4">
            <div className="container-fluid w-75"><br/>
                <h5 className="font-baloo font-size-20 mt-4">Shopping Cart</h5>

               
                <div className="row">

                    <div className="col-sm-9">
                       
                    {this.props.cartItems.map((item, index) => 
                    
                        <div  key={item.id}>
                           
                            <MobileItem item={item} index={index} />
                        </div>
                    )}
                        


                    </div>
                   
                    <div className="col-sm-3">
                        <div className="sub-total text-center mt-2 border">
                            <h6 className="font-size-12 font-raleway text-success py-3"><i className="fas fa-check"></i> order is eligible for FREE Delivery</h6>
                            <div className="border-top py-4">
                                <h5 className="font-baloo font-size-20">SubTotal {this.props.cartItems.length} items &nbsp;
                                    <span className="text-danger">$ <span  id="deal-price">{this.props.total}</span></span>
                                </h5>
                                
                                
                                
                            <button onClick={this.placeOrder} type="submit" className="btn btn-warning mt-3">Proceed to Buy</button>
                            
                            
                            
                            
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           
        </section>
    
           </div> 
           
        )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        total: state.cart.reduce((total, item) => total + item.quantity * item.mobile.item_price, 0),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(clearCart()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);