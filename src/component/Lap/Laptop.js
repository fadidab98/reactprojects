import React, { Component } from 'react'
import "../../App.css"
import axios from "axios"
import Loading from '../Loading/Loading'
import{Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
import {connect} from 'react-redux'
import {addToCart} from "../../Action/action";

 
//import Mobile from './Mobile';
export class Laptop extends Component {
    state = {
        products: [],
        loading: true,
        quantity: 1,
        search:""
      
      
     
    };
        
        
    
    
    componentDidMount(){
        this.setState({loading: true});
        axios.get("http://localhost/graduat_project/computerView.php")
        .then(response =>{
            this.setState({products: response.data ,loading:false,searchString:response.data,data:response.data});

        })
    }
    
    


    addToCart =(laptop)=>{
        this.props.addToCart(laptop, this.state.quantity);
    
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
                <h4 class="font-rubik font-size-20 text-center mt-3 mb-3">Computers</h4>
                <center><input className="form-control w-50" placeholder="Find your laptop" onChange={this.onChange} /></center>
                
            <div className="container-fluid">
                {this.state.products.map(product =>{
                   
                    const {search}=this.state;
                    if(search !== "" && product.item_name.toLowerCase().indexOf(search.toLowerCase())===-1){
                        return null;
                    }
                  return (
                     
                <div className="col-sm-12 cla-cart" key={product.id} {...product}>
                     <div className="row border-top  py-3 mt-3">
                            <div className="col-sm-4">
                            <Link to={"/laptops/" + product.id} ><img src={product.item_image}  alt="product1" className="img-fluid cla-img"/></Link>
                            </div>
                            <div className="col-sm-6">
                                <h5 className="font-raleway font-size-20">{product.item_name}</h5>
                                <small>By {product.item_brand}</small>
                               
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
                                <div className="text-center">
                                <button onClick={()=>this.addToCart( this.state.products.find(item=> item.id ===product.id))} type="submit" className="btn btn-warning font-size-12">Add to Cart</button>
                                </div>
                                

                                
                            </div>
                            <div className="col-sm-2 text-right">
                                <div className="font-size-20 text-danger font-baloo">
                                    $
                                    <spam>{ product.item_price}</spam>
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

   
export default connect(null,mapDispatchToProps)(Laptop)


