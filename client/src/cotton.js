import { useState } from "react";
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './index.css';
import Header from './customer_navbar'
import Footer from './footer'
import { NavLink, Link } from 'react-router-dom'
let error = [];

function App() {
 
  const navigate=useNavigate()
    
    const [qty, setqty] = useState(0);
    const [quality1, setquality1] = useState(0);
    const [quality2, setquality2] = useState(0);
    const [quality3, setquality3] = useState(0);
    let q1=parseInt(quality1);
    let q2=parseInt(quality2);
    let q3=parseInt(quality3);
    let qty1=parseInt(qty);

    const cott= localStorage.getItem("cottData");
    const cottData =JSON.parse(cott);

    function localstorage1()
    {
        cottData.quantity = qty1;
        cottData.quality_1 = q1;
        cottData.quality_2 = q2;
        cottData.quality_3 = q3;
        const jsonobjcott = JSON.stringify(cottData);
        console.log(jsonobjcott);
        localStorage.setItem("cottData",jsonobjcott);
    }

   function Check1() {
    if((q1>1 && q1<100)){
      
      Check2()
      return true;
      
    }  else{
      console.log("failure");
      return false;

    }}
   function Check2(){
    if((q2>1 && q2<100)){
        
        Check3()
        return true;
      
    }  else{
      console.log("failure");
        return false;

    }
  }
    function Check3(){
      if((q3>1 && q3<100)){
          
          Checkqty()
          return true;
        
      }  else{
        console.log("failure");
          return false;
  
      }
    }
      function Checkqty(){
        if((qty1>0 && qty1 <=25)){
            
            localstorage1()
            return true;
          
        }  else{
          console.log("failure");
            return false;
    
        }
      
      }

      // function Check() {
      //     if(Check1() && Check2() && Check3() && Checkqty()) {
      //         window.location.href = '/itemlistnew1'
      //     }

      //     if(!Check1()) {
      //         error.push("Error in Quality 1\n");
      //     }

      //     if(!Check2()) {
      //         error.push("Error in Quality 2\n");
      //     }

      //     if(!Check3()) {
      //         error.push("Error in Quality 3\n");
      //     }

      //     if(!Checkqty()) {
      //         error.push("Error in Quantity\n");
      //     }

      //     if(error.length != 0)
      //         alert(error);
      // }
   
return (
    
      <body>
      <><Header /><div style={{backgroundColor:'black',textAlign:'center'}}>
    <center>
      <h1 id="cot">
        Order Cotton
      </h1>
    </center>
  <div id="details">
      <div>
        <label>Enter Quantity required </label>
        <input type="number" placeholder='Enter in kg'
          onChange={(event) => { setqty(event.target.value); } }></input>
           <br></br>
      </div>
      <label>Enter a value between the range 1-100.</label>
      <div>

        <input type="number" placeholder='Uniformity Index'
         onChange={(event) => { setquality1(event.target.value); } } ></input>
           

           <br></br>
      </div>
      <div>

        <input type="number" placeholder='Strength'
          onChange={(event) => { setquality2(event.target.value); } }></input>
           <br></br>
      </div>
      
      <div>

        <input type="number" placeholder='Elongation'
          onChange={(event) => { setquality3(event.target.value); } }></input>
           <br></br>
      </div>
<<<<<<< HEAD
      <center>
      
       <button className="button-methish" onClick={() => {
        Check1()
         }}><Link id="sign" to='/itemlistnew1'>Add to cart</Link></button> 
      <button className="button-methish"><Link id="sign" to='/specialrequestform'>Special Request?</Link></button>
      </center>
</div>
=======
      <button onClick={() => {
            Check()
       } }>Check</button>
       <button onClick={() => {
        localstorage1()
             }}><Link id="sign" to='/itemlistnew1'>Add to Cart</Link></button>
          <br />
          <Link id="sign" to='/specialrequestform'>Having more items than the quantity, want to place a special order ?</Link>

>>>>>>> main
    </div>
    <Footer /></>
    </body>
)
}
export default App;
