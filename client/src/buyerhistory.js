
import React, {useEffect, useState} from "react";
import Axios from "axios";
import Header from './customer_navbar'
import Footer from './footer'

let email = localStorage.getItem('email');

function App() {

    const [buydetails, setBuydetails] = useState([]);

    useEffect(() => {
    Axios.post('http://localhost:9091/api/buy/confirm', {
        custEmail: email
    }).then((response) => {
        setBuydetails(response.data);
        console.log(response)
        if (response.data == 'success') {
            window.location.href = "http://localhost:3000/login";
        }
    });
    }, []);

    let i;
    return (
        <><Header /><div>
            <center>
                <h1 id="Items_new_sell">
                    Buyer History
                </h1>
            </center>
        </div>
            <div id="details">
                {buydetails.map((bill)=>(
                        <div key={bill.billNo}>
                            <h5 id="Items_new_sell"> Bill No.: {bill.billNo} </h5>
                            <h5 id="Items_new_sell"> Issue Date: {bill.issueDate}</h5>
                            <h5 id="Items_new_sell"> Items:
                                {bill.it.map((item)=>(
                                        <div key={item.billNo}>
                                            <h5> Item Name: {item.itemName} </h5>
                                            <h5> Quantity: {item.quantity}</h5>
                                            ***********************************
                                        </div>
                                    )
                                )}
                            </h5>
                            <h5 id="Items_new_sell"> Total Amount: {bill.totalAmt}</h5>
                            <h5 id="Items_new_sell"> Status: {bill.status}</h5>
                            -------------------------------------
                        </div>
                    )
                )}
            </div>
            {/*<div>
                <button onClick={() => {
                    Check()
                } }>Check</button>
                <button onClick={() => {
                    localstorage3()
                }}>Add to cart</button>
                <button>Special Request?</button>

            </div>*/}<Footer/></>

    )
}
export default App;