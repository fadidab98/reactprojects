import React, { Component } from 'react'
import "../../App.css"
import axios from "axios"
import Loading from '../Loading/Loading'
import{Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
import {connect} from 'react-redux'
import {addToCart} from "../../Action/action";

 
//import Mobile from './Mobile';
export class Mobiles extends Component {
  
    state = {
        products: [],
        loading: true,
        quantity: 1,
        search:""
      
      
     
    };
        
        
    
    
    componentDidMount(){
        this.setState({loading: true});
        axios.get("http://localhost/graduat_project/view.php")
        .then(response =>{
            this.setState({products: response.data ,loading:false,searchString:response.data,data:response.data});

        })
    }
    
    


    addToCart =(mobile)=>{
        this.props.addToCart(mobile, this.state.quantity);
    
    }

     onChange=(e)=>{
         this.setState({
             search: e.target.value
         })
     console.log(this.state.search)
     }
    render() {
     
        return (
           this.state.loading?(
               <Loading/>
              
         
         
         ) :( <section id="special-price mt-5 " style={{minHeight:"65vh"}} className="mt-5" >
            <div class="container  mt-5"><br/>
                <h4 class="font-rubik font-size-20 text-center mt-3 mb-3">Mobile Phone</h4>
                <center><input className="form-control w-50" placeholder="Find your mobile" onChange={this.onChange} /></center>
                
            <div className="row">
                {this.state.products.map(product =>{
                   
                    const {search}=this.state;
                    if(search !== "" && product.item_name.toLowerCase().indexOf(search.toLowerCase())===-1){
                        return null;
                    }
                  return (
                     
                    <div className="cart ml-1 mt-4" key={product.id}{...product} >
                       
                    <div className="cart py-2" style={{width: "200px"}}>
                                <div className="product font-raleway">
                                    <Link to={"/Mobiles/" + product.id} ><img src={product.item_image} alt="product1" className="img-fluid"/></Link>
                                    <div className="text-center">
                                        <h6>{product.item_name}</h6>
            
                                        <div className="rating text-warning font-size-12">
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="fas fa-star"></i></span>
                                            <span><i className="far fa-star"></i></span>
                                        </div>
                                        <div className="price py-2">
                                            <span>$ {product.item_price}</span>
                                        </div>
                                        <button onClick={()=>this.addToCart( this.state.products.find(item=> item.id ===product.id))} type="submit" className="btn btn-warning font-size-12">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                  ) 
                  
                  
               
                })}
            
            </div>
            </div>

            </section>
            
            
            )
        
           )
         
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (productInfo, quantity) => dispatch(addToCart(productInfo, quantity)),
    };
}

export default connect(null,mapDispatchToProps)(Mobiles)


