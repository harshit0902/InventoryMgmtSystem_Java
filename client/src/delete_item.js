import { useState } from "react";
import Axios from "axios";
import {useParams} from "react-router-dom";

function App() {
    const [id, setid] = useState(0);
    const {ID} = useParams();

    const savedetail = (ID) => {
        Axios.delete('http://localhost:9091/api/admin/deleteitem/${ID}', {
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
            onChange={(event) => { setid(parseInt(event.target.value)); } }></input>
             <br></br>
        </div>
        <button onClick={()=>savedetail(id)}>Delete Item</button>


</div></>

)
}
export default App;