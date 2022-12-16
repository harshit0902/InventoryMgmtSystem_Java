import React from "react";
import { useState } from "react";
import Header from './customer_navbar'
import Footer from './footer'
import { NavLink, Link } from 'react-router-dom'
let error = [];


function App() {
    
    const [qty, setqty] = useState(0);
    const [quality1, setquality1] = useState(0);
    const [quality2, setquality2] = useState(0);
    const [quality3, setquality3] = useState(0);
    let q1=parseInt(quality1);
    let q2=parseInt(quality2);
    let q3=parseInt(quality3);
    let qty1=parseInt(qty);
    
    const alum= localStorage.getItem("alumData");
    const alumData =JSON.parse(alum);
    
    function localstorage5()
    {alumData.quantity = qty1;
      alumData.quality_1 = q1;
      alumData.quality_2 = q2;
      alumData.quality_3 = q3;
      const jsonobjalum = JSON.stringify(alumData);
      console.log(jsonobjalum);
      localStorage.setItem("alumData",jsonobjalum);
    
  }
    function Check1() {
        if((q1>9000 && q1<15000)){Check2()
            return true;


        }  else{
            console.log("failure");
            return false;

        }}
    function Check2(){
        if((q2>9000 && q2<15000)){Check3()
            return true;


        }  else{
            console.log("failure");
            return false;

        }
    }
    function Check3(){
        if((q3>9000 && q3<15000)){Checkqty()
            return true;


        }  else{
            console.log("failure");
            return false;

        }
    }
    function Checkqty(){
        if((qty1>0 && qty1 <=25)){localstorage5()
            return true;


        }  else{
            console.log("failure");
            return false;

        }

    }

    function Check() {
        if(Check1() && Check2() && Check3() && Checkqty()) {
            window.location.href = '/itemlistnew1'
        }

        if(!Check1()) {
            error.push("Error in Quality 1\n");
        }

        if(!Check2()) {
            error.push("Error in Quality 2\n");
        }

        if(!Check3()) {
            error.push("Error in Quality 3\n");
        }

        if(!Checkqty()) {
            error.push("Error in Quantity\n");
        }

        if(error.length != 0)
            alert(error);
    }
   
return (
    
      
      <><Header /><div>
    <center>
      <h1 id="cot">
        Order Aluminium
      </h1>
    </center>
  </div><div id="details">
      <div>
        <label>Enter Quantity required </label>
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
      <center>
      <button className="button-methish" onClick={() => {
        Check1()
         }}><Link id="sign" to='/itemlistnew1'>Add to cart</Link></button> 
      <button className="button-methish"><Link id="sign" to='/specialrequestform'>Special Request?</Link></button>
      </center>

    </div><Footer /></>

)
}
export default App;
