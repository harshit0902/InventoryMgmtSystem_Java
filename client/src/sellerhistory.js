import React, {useEffect, useState} from "react";
import Axios from "axios";

let email = localStorage.getItem("email");
function App() {

    const [selldetails, setSelldetails] = useState([]);

    useEffect(() => {
    Axios.post('http://localhost:9091/api/sell/confirm', {
        sellEmail: email
    }).then((response) => {
        setSelldetails(response.data);
        console.log(response)
        if (response.data == 'success') {
            window.location.href = "http://localhost:3000/login";
        }
    });
    }, []);

    return (
        <><div>
            <center>
                <h1 id="buyconfirmation">
                    Seller History
                </h1>
            </center>
        </div>
            <div id="details">
                {selldetails.map((bill)=>(
                        <div key={bill.billNo}>
                            <h5> Bill No.: {bill.billNo} </h5>
                            <h5> Issue Date: {bill.issueDate}</h5>
                            <h5> Items:
                                {bill.itemSold.map((item)=>(
                                        <div key={item.billNo}>
                                            <h5> Item Name: {item.itemName} </h5>
                                            <h5> Quantity: {item.quantity}</h5>
                                            ***********************************
                                        </div>
                                    )
                                )}
                            </h5>
                            <h5> Total Quantity: {bill.totalQty}</h5>
                            <h5> Total Amount: {bill.totalAmt}</h5>
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

            </div>*/}</>

    )
}
export default App;
