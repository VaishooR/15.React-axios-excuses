import * as React from 'react';
import './style.css';
import {useState} from 'react';
import Axios from 'axios';

export default function App() {
  
  const[excuse,generateexcuse]=useState('');
  const fetchexcuse=(excuse)=>{
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then((res)=>{
      generateexcuse(res.data[0].excuse)
    })
  }

  return (
    <div>
     <h1>Generate an Excuse</h1>
     <button onClick={()=>fetchexcuse('party')}>Party</button>
     <button onClick={()=>fetchexcuse('family')}>Family</button>
     <button onClick={()=>fetchexcuse('office')}>Office</button>

     <h1>{excuse}</h1>

    </div>

  );
}
