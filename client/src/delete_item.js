import { useState } from "react";
import Axios from "axios";

function App() {
    const [id, setid] = useState(0);

    const savedetail = () => {
        Axios.delete('http://localhost:9091/api/admin/deleteitem', {
            itemID: id
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
        <button onClick={savedetail}>Delete Item</button>


</div></>

)
}
export default App;