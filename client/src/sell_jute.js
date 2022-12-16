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

    const selljut= localStorage.getItem("selljutData");
    const selljutData =JSON.parse(selljut);

    function slocalstorage2()
    {
        selljutData.quantity = qty1;
        selljutData.quality_1 = q1;
        selljutData.quality_2 = q2;
        selljutData.quality_3 = q3;
        const jsonobjselljut = JSON.stringify(selljutData);
        console.log(jsonobjselljut);
        localStorage.setItem("selljutData",jsonobjselljut);
    }

   function Check1() {
    if((q1>9000 && q1<15000)){ Check2()   /* variables needed from backend*/
      console.log("success");
      
      
    }  else{
      console.log("failure");
      alert("Invalid Quality 1");

    }}
   function Check2(){
    if((q2>9000 && q2<15000)){Check3()
      console.log("success");
      
      
    }  else{
      console.log("failure");
      alert("Invalid Quality 2");

    }
  }
    function Check3(){
      if((q3>9000 && q3<15000)){ Checkqty()
        console.log("success");
        
        
      }  else{
        console.log("failure");
        alert("Invalid Quality 3");
  
      }
    }
      function Checkqty(){
        if((qty1>0 && qty1 <=25)){ slocalstorage2()
                  /*variables from backend*/
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
        Supply Jute
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
      <center>
      <button className="button-methish" onClick={() => {
        Check1()
        
       } }><Link id="sign" to='/sellerform1'>Add to Supply Cart</Link></button>
       
      </center>
      

    </div><Footer /></>

)
}
export default App;
