import React from "react";
import { useState } from "react";
import Header from './supplier_navbar'
import Footer from './footer'
import {Link} from "react-router-dom";

function App() {
    
    const [qty, setqty] = useState(0);
    const [quality1, setquality1] = useState(0);
    const [quality2, setquality2] = useState(0);
    const [quality3, setquality3] = useState(0);
    let q1=parseInt(quality1);
    let q2=parseInt(quality2);
    let q3=parseInt(quality3);
    let qty1=parseInt(qty);

    const sellrag= localStorage.getItem("sellragData");
    const sellragData =JSON.parse(sellrag);

    function slocalstorage10()
    {
        sellragData.quantity = qty1;
        sellragData.quality_1 = q1;
        sellragData.quality_2 = q2;
        sellragData.quality_3 = q3;
        const jsonobjsellrag = JSON.stringify(sellragData);
        console.log(jsonobjsellrag);
        localStorage.setItem("sellragData",jsonobjsellrag);
    }

   function Check1() {
    if((q1>9000 && q1<15000)){    /* variables needed from backend*/
      console.log("success");
      
      
    }  else{
      console.log("failure");
      alert("Invalid Quality 1");

    }}
   function Check2(){
    if((q2>9000 && q2<15000)){
      console.log("success");
      
      
    }  else{
      console.log("failure");
      alert("Invalid Quality 2");

    }
  }
    function Check3(){
      if((q3>9000 && q3<15000)){
        console.log("success");
        
        
      }  else{
        console.log("failure");
        alert("Invalid Quality 3");
  
      }
    }
      function Checkqty(){
        if((qty1>0 && qty1 <=25)){           /*variables from backend*/
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
        Supply Ragi
      </h1>
    </center>
  </div><div id="details">
      <div>
        <label>Enter Quantity to be suppplied </label>
        <input type="number" placeholder='Enter in kg'
          onChange={(event) => { setqty(event.target.value); } }></input>
           <br></br>
      </div>
      <label>Enter a value between the range.</label>
      <div>

        <input type="number" placeholder='Quality 1'
         onChange={(event) => { setquality1(event.target.value); } } ></input>
           

           <br></br>
      </div>
      <div>

        <input type="number" placeholder='Quality 2'
          onChange={(event) => { setquality2(event.target.value); } }></input>
           <br></br>
      </div>
      
      <div>

        <input type="number" placeholder='Quality 3'
          onChange={(event) => { setquality3(event.target.value); } }></input>
           <br></br>
      </div>
      <button onClick={() => {
        Check1()
        Check2()
        Check3() 
        Checkqty()
       } }>Check</button>
       <button onClick={() => {
        slocalstorage10()
             }}><Link id="sign" to='/sellerform1'>Add to Supply Cart</Link></button>
      

    </div><Footer /></>

)
}
export default App;
