import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'



function CartIcon(props){
    return  <div >
         <Link to="/Cart" class="py-2 rounded-pill " style={{backgroundColor:"#003859"}}>
         <span class="font-size-16 px-2 text-white"><i class="fas fa-shopping-cart"></i></span>
                    <span class="px-3 py-2 rounded-pill text-dark  bg-light">{props.totalQuantity}</span>
         </Link>

    </div>
}
const mapStateToProps = (state) => {
    return {
        totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
    };
}

export default connect(mapStateToProps)(CartIcon);