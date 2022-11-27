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
        Axios.post('http://localhost:9091/api/admin/add', {
            it: send
        }).then((response) => {
            // setUserdetails(response.data);
            console.log(response)
            if (response.data == 'success') {
                //window.location.href = "http://localhost:3000/login";
            }
        });
    }

return (

    <><div>
  <center>
    <h1 id="cot">
      Add an Item
    </h1>
  </center>
</div><div id="details">
        {/*<div>
      <label>Enter Item Id </label>
      <input type="number" placeholder='Item Id'
        onChange={(event) => { setid(event.target.value); } }></input>
         <br></br>
    </div>*/}
<div>
      <label>Enter Itemname </label>
      <input type="text" placeholder='Itemname'
        onChange={(event) => { setname(event.target.value); } }></input>
         <br></br>
    </div>
    <div>
      <label>Enter Quantity </label>
      <input type="number" placeholder='Enter in kg'
        onChange={(event) => { setqty(event.target.value); } }></input>
         <br></br>
    </div>

        <div>
            <label>Enter Price </label>
            <input type="number" placeholder='Enter in Rs.'
                   onChange={(event) => { setprice(event.target.value); } }></input>
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
         addItem()
           }}>Add Item</button>
    

  </div></>

)
}
export default App;