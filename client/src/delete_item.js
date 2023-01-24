import React from "react";
import { useState } from "react";
import Axios from "axios";
import {Link, useParams} from "react-router-dom";
import Header from './admin_navbar'
import Footer from './footer'

function App() {
    const [id, setid] = useState(0);
    const {ID} = useParams();

    const savedetail = (ID) => {
      console.log(ID);
        Axios.delete('http://localhost:9091/api/admin/deleteitem/${ID}', {
        }).then((response) => {
            // setUserdetails(response.data);
            console.log(response)
            // if (response.data == 'success') {
            //     window.location.href = "http://localhost:3000/login";
            // }
        });
    }

    return (
        <><Header /><div>
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
        </div><div id='detailsnew'>
      <center>
     <button className="button-methish" onClick={() => savedetail(id)}><Link id="sign" to='/admin_homepage'>Delete Item</Link></button>
     </center>
     </div>


</div><Footer /></>

)
}
export default App;