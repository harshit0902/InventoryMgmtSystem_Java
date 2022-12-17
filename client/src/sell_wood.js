import React from "react";
import { useState } from "react";
import Header from './supplier_navbar'
import Footer from './footer'
<<<<<<< HEAD
import { NavLink, Link } from 'react-router-dom'
=======
import {Link} from "react-router-dom";

>>>>>>> main
function App() {
    
    const [qty, setqty] = useState(0);
    const [quality1, setquality1] = useState(0);
    const [quality2, setquality2] = useState(0);
    const [quality3, setquality3] = useState(0);
    let q1=parseInt(quality1);
    let q2=parseInt(quality2);
    let q3=parseInt(quality3);
    let qty1=parseInt(qty);

    const sellwoo= localStorage.getItem("sellwooData");
    const sellwooData =JSON.parse(sellwoo);

    function slocalstorage7()
    {
        sellwooData.quantity = qty1;
        sellwooData.quality_1 = q1;
        sellwooData.quality_2 = q2;
        sellwooData.quality_3 = q3;
        const jsonobjsellwoo = JSON.stringify(sellwooData);
        console.log(jsonobjsellwoo);
        localStorage.setItem("sellwooData",jsonobjsellwoo);
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
        if((qty1>0 && qty1 <=25)){  slocalstorage7()         /*variables from backend*/
          console.log("success");
          
          
        }  else{
          console.log("failure");
          alert("Invalid Quantity ");
    
        }
      
      }
   
return (
    
      
      <><Header /><div>
    <center>
      <h1 id="cot">
        Supply Wood
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

        <input type="number" placeholder='Shear'
         onChange={(event) => { setquality1(event.target.value); } } ></input>
           

           <br></br>
      </div>
      <div>

        <input type="number" placeholder='Cell Wall Thickness'
          onChange={(event) => { setquality2(event.target.value); } }></input>
           <br></br>
      </div>
      
      <div>

        <input type="number" placeholder='Coarseness'
          onChange={(event) => { setquality3(event.target.value); } }></input>
           <br></br>
      </div>
      <center>
      <button className="button-methish" onClick={() => {
        Check1()
<<<<<<< HEAD
        
       } }><Link id="sign" to='/sellerform1'>Add to Supply Cart</Link></button>
       
      </center>
=======
        Check2()
        Check3() 
        Checkqty()
       } }>Check</button>
       <button onClick={() => {
        slocalstorage7()
             }}><Link id="sign" to='/sellerform1'>Add to Supply Cart</Link></button>
      
>>>>>>> main

    </div><Footer /></>

)
}
export default App;
