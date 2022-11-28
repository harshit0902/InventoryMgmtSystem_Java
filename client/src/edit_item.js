import { useState } from "react";
import Axios from "axios";

function App() {
    const [id, setid] = useState(0);
    const [name, setname] =useState("");
    const [qty, setqty] = useState(0);
    const [price, setprice] = useState(0);
    const [quality1, setquality1] = useState(0);
    const [quality2, setquality2] = useState(0);
    const [quality3, setquality3] = useState(0);

    const savedetail = () => {
        Axios.put('http://localhost:9091/api/admin/modifyitem', {
            itemID: id,
            itemName: name,
            quantity: qty,
            price: price,
            quality1: quality1,
            quality2: quality2,
            quality3: quality3
        }).then((response) => {
            // setUserdetails(response.data);
            console.log(response)
            if (response.data == 'success') {
                window.location.href = "http://localhost:3000/login";
            }
        });
    }

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
            <label>Enter Price required </label>
            <input type="number" placeholder='Enter in Rs.'
                   onChange={(event) => { setprice(event.target.value); } }></input>
            <br></br>
        </div>
    
    <div>
        <label>Enter Quality1 required </label>
      <input type="number" placeholder='Quality 1'
       onChange={(event) => { setquality1(event.target.value); } } ></input>
         

         <br></br>
    </div>
    <div>
        <label>Enter Quality2 required </label>
      <input type="number" placeholder='Quality 2'
        onChange={(event) => { setquality2(event.target.value); } }></input>
         <br></br>
    </div>
    
    <div>
        <label>Enter Quality3 required </label>
      <input type="number" placeholder='Quality 3'
        onChange={(event) => { setquality3(event.target.value); } }></input>
         <br></br>
    </div>
    
     <button onClick={savedetail}>Edit Item</button>
    

  </div></>

)
}
export default App;