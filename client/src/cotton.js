import { useState } from "react";



function App() {
    
    const [qty, setqty] = useState("");
    const [quality1, setquality1] = useState("");
    const [quality2, setquality2] = useState("");
    const [quality3, setquality3] = useState("");


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
      <label>Enter a value between 1-5. 5 being Highest quality while 1 being lowest quality</label>
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

    </div></>

)
}
export default App;
