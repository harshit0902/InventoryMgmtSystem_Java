import { useState } from "react";




function App() {
    
    const [qty, setqty] = useState(0);
    const [quality1, setquality1] = useState(0);
    const [quality2, setquality2] = useState(0);
    const [quality3, setquality3] = useState(0);
    let q1=parseInt(quality1);
    let q2=parseInt(quality2);
    let q3=parseInt(quality3);
    let qty1=parseInt(qty);
    if(q1>9000&&q1<15000){
      console.log("success");
      
    }  else{
      console.log("failure");
      alert("Input Invalid1"); 
      }
   if(q2>9000&&q2<15000){
        console.log("success");
        
      }  else{
        console.log("failure");
        alert("Input Invalid2"); 
     }  
  if(q3>9000&&q3<15000){
          console.log("success");
          
        }  else{
          console.log("failure");
          alert("Input Invalid3"); 
    } 
    if(qty1<=25){
      console.log("success");
      
    }  else{
      console.log("failure");
      alert("Input Invalid4"); 
      }
    

return (
    
      
      <><div>
    <center>
      <h1 id="cot">
        Order Cotton
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
          onChange={(event) => { setquality1(event.target.value); } }></input>
          

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
      <button>Add to Cart</button>
      <button>Special Request?</button>

    </div></>

)
}
export default App;
