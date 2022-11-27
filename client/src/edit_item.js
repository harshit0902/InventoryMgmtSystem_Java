import { useState } from "react";

function App() {
    const [id, setid] = useState(0);
    const [name, setname] =useState("");
    const [qty, setqty] = useState(0);
    const [quality1, setquality1] = useState(0);
    const [quality2, setquality2] = useState(0);
    const [quality3, setquality3] = useState(0);
    
return (
    
      
    <><div>
  <center>
    <h1 id="cot">
      Edit an Item
    </h1>
  </center>
</div><div id="details">
<div>
      <label>Enter Item Id </label>
      <input type="number" placeholder='Item Id'
        onChange={(event) => { setid(event.target.value); } }></input>
         <br></br>
    </div>
<div>
      <label>Enter Itemname </label>
      <input type="text" placeholder='Itemname'
        onChange={(event) => { setname(event.target.value); } }></input>
         <br></br>
    </div>
    <div>
      <label>Enter Quantity required </label>
      <input type="number" placeholder='Enter in kg'
        onChange={(event) => { setqty(event.target.value); } }></input>
         <br></br>
    </div>
    
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
      
           }}>Edit Item</button>
    

  </div></>

)
}
export default App;