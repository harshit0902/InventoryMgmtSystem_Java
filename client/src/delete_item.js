import { useState } from "react";

function App() {
    const [id, setid] = useState(0);
    return (
    
      
        <><div>
      <center>
        <h1 id="cot">
          Delete an Item
        </h1>
      </center>
    </div><div id="details">
    <div>
          <label>Enter Item Id </label>
          <input type="number" placeholder='Item Id'
            onChange={(event) => { setid(event.target.value); } }></input>
             <br></br>
        </div>
        <button onClick={() => {
      
    }}>Delete Item</button>


</div></>

)
}
export default App;