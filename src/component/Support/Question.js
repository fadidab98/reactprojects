import React, { useState } from 'react';
import './index23.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,answer}) => {
  const [showInfo,setShowInfo] = useState(false);

  return <article className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={()=> setShowInfo( !showInfo)} >
        {
          showInfo?<AiOutlineMinus/> : <AiOutlinePlus/>
        }
      </button>
    </header>
   
      {
        showInfo &&  <p> {answer}    </p>
      }
     




  </article>;
};

export default Question;