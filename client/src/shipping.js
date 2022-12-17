import React, {useEffect, useState} from "react";
import Axios from "axios";
import Header from './customer_navbar'
import Footer from './footer'
import {Link} from "react-router-dom";

let email = localStorage.getItem('email');

function Cart() {
    const [shippingDetails, setShippingDetails] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:9091/api/admin/getshipping', {
        }).then((response) => {
            setShippingDetails(response.data);
        });
    }, []);

    function Del(val) {
        console.log(val);
        let temp1 = shippingDetails.map(obje => {
            if (obje.billNo !== val) {
                return obje;
            } else {
                Axios.put('http://localhost:9091/api/admin/updatestatus', {
                    custEmail : email,
                    billID : val
                }).then((response) => {
                });
                return {}
            }
        });
        setShippingDetails(temp1);
        console.log(temp1);
        console.log(val);
    }

    return (
        <><Header/>
            <div>
                <center>
                    <h1 id="cart">
                        Cart
                    </h1>
                </center>
                {/* <h5><button onClick={()=>{setCart(cart)}}>Display</button></h5> */}
            </div>
            <div id='detailsnew'>
                {shippingDetails.map((bill) => (
                    bill.status == "Order Processing" ? (
                        <div key={bill.billNo}>
                            <h5 id="Items_new_sell"> Bill Number : {bill.billNo} </h5>
                            <h5 id="Items_new_sell"> Customer Email: {bill.custEmail} </h5>
                            <h5 id="Items_new_sell"> Issue Date: {bill.issueDate}</h5>
                            <h5 id="Items_new_sell"> Items:
                                {bill.it.map((item) => (
                                        <div key={item.billNo}>
                                            <h5 id="Items_new_sell"> Item Name: {item.itemName} </h5>
                                            <h5 id="Items_new_sell"> Quantity: {item.quantity}</h5>
                                            ***********************************
                                        </div>
                                    )
                                )}
                            </h5>
                            <h5 id="Items_new_sell"> Total Amount: {bill.totalAmt} </h5>
                            <h5 id="Items_new_sell"> Status {bill.status} </h5>
                            <h5 id="Items_new_sell">
                                <button id="button-result" onClick={() => {
                                    Del(bill.billNo)
                                }}>Delete
                                </button>
                            </h5>
                            -------------------------------------
                        </div>
                    ) : (""))
                )}
            </div>

            <Footer/></>
    )
}

export default Cart;
