import React from "react";
import { useState } from "react";
import Header from './supplier_navbar'
import Footer from './footer'
import { NavLink, Link } from 'react-router-dom'

function App() {
    
    const [qty, setqty] = useState(0);
    const [quality1, setquality1] = useState(0);
    const [quality2, setquality2] = useState(0);
    const [quality3, setquality3] = useState(0);
    let q1=parseInt(quality1);
    let q2=parseInt(quality2);
    let q3=parseInt(quality3);
    let qty1=parseInt(qty);

    const sellbaj= localStorage.getItem("sellbajData");
    const sellbajData =JSON.parse(sellbaj);

    function slocalstorage9()
    {
        sellbajData.quantity = qty1;
        sellbajData.quality_1 = q1;
        sellbajData.quality_2 = q2;
        sellbajData.quality_3 = q3;
        const jsonobjsellbaj = JSON.stringify(sellbajData);
        console.log(jsonobjsellbaj);
        localStorage.setItem("sellbajData",jsonobjsellbaj);
    }

   function Check1() {
    if((q1>1 && q1<100)){ Check2()   /* variables needed from backend*/
      console.log("success");
      
      
    }  else{
      console.log("failure");
      alert("Invalid Quality 1");

    }}
   function Check2(){
    if((q2>1 && q2<100)){Check3()
      console.log("success");
      
      
    }  else{
      console.log("failure");
      alert("Invalid Quality 2");

    }
  }
    function Check3(){
      if((q3>1 && q3<100)){Checkqty()
        console.log("success");
        
        
      }  else{
        console.log("failure");
        alert("Invalid Quality 3");
  
      }
    }
      function Checkqty(){
        if((qty1>0 && qty1 <=25)){  slocalstorage9()         /*variables from backend*/
          console.log("success");
          
          
        }  else{
          console.log("failure");
          alert("Invalid Quantity ");
    
        }
      
      }
   
return (
    
      
      <><div>
    <center>
      <h1 id="cot">
        Supply Bajra
      </h1>
    </center>
  </div><div id="details">
      <div>
        <label>Enter Quantity to be suppplied </label>
        <input type="number" placeholder='Enter in kg'
          onChange={(event) => { setqty(event.target.value); } }></input>
           <br></br>
      </div>
      <label>Enter a value between the range 1-100.</label>
      <div>

        <input type="number" placeholder='Moisture Content'
         onChange={(event) => { setquality1(event.target.value); } } ></input>
           

           <br></br>
      </div>
      <div>

        <input type="number" placeholder='Damaged Grains'
          onChange={(event) => { setquality2(event.target.value); } }></input>
           <br></br>
      </div>
      
      <div>

        <input type="number" placeholder='Immature Grains'
          onChange={(event) => { setquality3(event.target.value); } }></input>
           <br></br>
      </div>
      <center>
      <button className="button-methish" onClick={() => {
        Check1()
        
       } }><Link id="sign" to='/sellerform1'>Add to Supply Cart</Link></button>
       
      </center>

      

    </div></>

)
}
export default App;
