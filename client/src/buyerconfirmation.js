
import { useState } from "react";
import Axios from "axios";

const [buydetails, setBuydetails] = useState([]);


function App() {

      return (
        <><div>
            <center>
                <h1 id="buyconfirmation">
                    Confirmation Page
                </h1>
            </center>
        </div>
        <div id="details">
            {buydetails.map((val, key)=>{
                return <>
                <div>
            Bill Number : {val.billNo}
                <br></br>
            Total Amount : {val.totalAmt}
                </div>
                </>
        })}
        </div>
        <div>
            <button onClick={() => {
                Check()
            } }>Check</button>
            <button onClick={() => {
                localstorage3()
            }}>Add to cart</button>
            <button>Special Request?</button>

        </div></>

      )
}
export default App;
