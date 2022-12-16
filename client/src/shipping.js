import React, {useEffect, useState} from "react";
import Axios from "axios";
import Header from './customer_navbar'
import Footer from './footer'
import {Link} from "react-router-dom";

function Cart() {
    const [shippingDetails, setShippingDetails] = useState([]);
    //const [shipDetails, setShipDetails] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:9091/api/admin/shipdetails', {}).then((response) => {
            setShippingDetails(response.data);
        });
    }, []);

    function Del(val) {
        let temp1 = shippingDetails.map(obje => {
            if (obje.id === val) {
                return {...obje, quantity: 0, quality1: 0, quality2: 0, quality3: 0};
            }
            return obje;
        });
        setShippingDetails(temp1);
        console.log(temp1);
        console.log(val);

        if (val == 0)
            localStorage.setItem("cottData", obj);

        if (val == 1)
            localStorage.setItem("jutData", obj);

        if (val == 2)
            localStorage.setItem("coffData", obj);

        if (val == 3)
            localStorage.setItem("steelData", obj);

        if (val == 4)
            localStorage.setItem("alumData", obj);

        if (val == 5)
            localStorage.setItem("coppData", obj);

        if (val == 6)
            localStorage.setItem("wooData", obj);

        if (val == 7)
            localStorage.setItem("wheData", obj);

        if (val == 8)
            localStorage.setItem("bajData", obj);

        if (val == 9)
            localStorage.setItem("ragData", obj);
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
            <div>
                {shippingDetails.map((bill) => (
                    bill.status != "Order Processing" ? (
                        <div key={bill.billNo}>
                            <h5> Customer Email: {bill.custEmail} </h5>
                            <h5> Issue Date: {bill.issueDate}</h5>
                            <h5> Items:
                                {bill.it.map((item) => (
                                        <div key={item.billNo}>
                                            <h5> Item Name: {item.itemName} </h5>
                                            <h5> Quantity: {item.quantity}</h5>
                                            ***********************************
                                        </div>
                                    )
                                )}
                            </h5>
                            <h5> Total Amount: {bill.totalAmt} </h5>
                            <h5> Status {bill.status} </h5>
                            <h5> Quality 3: {item.quality3} </h5>
                            <h5>
                                <button onClick={() => {
                                    Del(val)
                                }}>Delete
                                </button>
                            </h5>
                            -------------------------------------
                        </div>
                    ) : (""))
                )}
            </div>
            <button onClick={savedetail}><Link id="sign" to='/homepage2'>Confirm Cart</Link></button>

            <Footer/></>
    )
}

export default Cart;