import React from "react";
import { useState } from "react";
import Axios from "axios"
import Header from './customer_navbar'
import Footer from './footer'

function App() {
    const [buydetails, setBuydetails] = useState([]);

      return (
        <><Header /><div>
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
            } }>Check</button>
            <button onClick={() => {
            }}>Add to cart</button>
            <button>Special Request?</button>

        </div><Footer /></>

      )
}
export default App;
