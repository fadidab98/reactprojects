import React from "react";
import { connect } from "react-redux"; 
import 'bootstrap/dist/css/bootstrap.min.css'     
import {removeFromCart} from "../../Action/action";
function MobileItem(props){
    const {item,index} = props;
    const {mobile} = item;
    console.log(mobile.length)
    return(
                            <div className="row border-top  py-3 mt-3">
                            <div className="col-sm-2">
                                <img src={ "../"+mobile.item_image} style={{height:"120px"}} alt="cart1" className="img-fluid"/>
                            </div>
                            <div className="col-sm-8">
                                <h5 className="font-raleway font-size-20">{mobile.item_name}</h5>
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
                               
                                <div className="qty d-flex pt-2">
                                    <div className="d-flex font-raleway " style={{width:"35%"}}>

                                     <p className="pt-2">Quantity:</p>
                                        <input type="text" className="qty_input border px-2 w-50 bg-light text-center" disabled value={item.quantity} placeholder="1"/>
                                        

                                    </div>
                                    <button onClick={() => props.removeFromCart(index)} type="submit" className="btn font-baloo text-danger px-3 border-right">Delete</button>
                                    <button type="submit" className="btn font-baloo text-danger px-3 ">Save for Later</button>
                                </div>

                                
                            </div>
                            <div className="col-sm-2 text-right">
                                <div className="font-size-20 text-danger font-baloo">
                                    $
                                    <spam>{item.quantity * mobile.item_price}</spam>
                                </div>

                            </div>

                        </div> 
  )






}



const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (index) => dispatch(removeFromCart(index)),
    };
}
    
export default connect(null, mapDispatchToProps)(MobileItem);
/* */