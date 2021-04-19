import React, { useState,useEffect } from 'react';
import './index23.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import SingleQuestion from './Question';
import Contact from './Contact';
function App () {
 const [questions,setQuestions] = useState([])
  useEffect(()=>{
    axios.get("http://localhost/graduat_project/questionView.php")
    .then(res=>{
        setQuestions(res.data)

    })
     
  })

  return <main className="mb-5" style={{marginTop:"10rem"}}>
    <div className="container mt-5">
      <h3>questions and answers about login</h3>
      <section className="info">
        {
          questions.map((question)=>{
           return <SingleQuestion key={question.id} {...question}/>;
          })
        }
      </section>
    </div>
    <section className="container mt-5 w-50">
        <h3 className="text-danger text-center">Contact Us</h3>
    <Contact/>
    </section>
  </main>;
}


export default App;
