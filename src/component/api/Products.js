import Mobile from "./products.json";

export function getAll(){
    return Promise.resolve(Mobile);
}

export function getById(id) {
    const mob =  Mobile.find(item => item.id === id);

    return Promise.resolve(mob);
}

export default {
    getAll,
    getById
}



  /**const fetchMobiles = async () => {
   * import axios from 'axios';
 import React,{useState,useEffect} from 'react'
 const url = "http://localhost/graduat_project/view.php";


 
  function getAll(){
    const[mobiles,setMobiles] = useState([])
      
        axios.get("http://localhost/graduat_project/view.php")
        .then(response =>{
            setMobiles({products: response.data});

        })
      
  }
  export default getAll

   
    try {
      const response = await fetch(url)
      const mobiles = await response.json()
    
      this.setState({mobiles: mobiles})
    } catch (error) {
      
      console.log(error)
    }
  } */