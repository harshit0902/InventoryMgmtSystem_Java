import React from "react";
import { useState } from "react";
import Header from './customer_navbar'
import Footer from './footer'

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
    const whe= localStorage.getItem("wheData");
    const wheData =JSON.parse(whe);
    
    function localstorage8()
    {wheData.quantity = qty1;
      wheData.quality_1 = q1;
      wheData.quality_2 = q2;
      wheData.quality_3 = q3;
      const jsonobjwhe = JSON.stringify(wheData);
      console.log(jsonobjwhe);
      localStorage.setItem("wheData",jsonobjwhe);
    
  }
    function Check1() {
        if((q1>9000 && q1<15000)){
            return true;


        }  else{
            console.log("failure");
            return false;

        }}
    function Check2(){
        if((q2>9000 && q2<15000)){
            return true;


        }  else{
            console.log("failure");
            return false;

        }
    }
    function Check3(){
        if((q3>9000 && q3<15000)){
            return true;


        }  else{
            console.log("failure");
            return false;

        }
    }
    function Checkqty(){
        if((qty1>0 && qty1 <=25)){
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
        Order Wheat
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
            Check()
       } }>Check</button>
       <button className="button-methish" onClick={() => {
        localstorage8()
             }}>Add to cart</button>
      <button className="button-methish">Special Request?</button>
      </center>
    </div><Footer /></>

)
}
export default App;
