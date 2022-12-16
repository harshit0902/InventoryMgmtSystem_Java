import React, {useEffect} from 'react'

import { useState } from "react";
import Axios from "axios";
import Header from './admin_navbar'
import Footer from './footer'



function Allcustomer()
{
    const [customerDetails, setcustomerDetails] = useState([]);

    useEffect(() => {
         Axios.get('http://localhost:9091/api/admin/displaycustomer', {
        }).then((response) => {
             setcustomerDetails(response.data);
            /*console.log(response)
           if (response.data != null) {
               window.location.href = "http://localhost:3000/login";
            }*/
        });
    }, []);

    return (
        <><Header /><div>
            <center>
                <h1 id="cot">
                    All Customers
                </h1>
            </center>
        </div>
    <div>
        {customerDetails.map((c)=>(
                <div key={c.email}>
                    <h5> Customer Name: {c.username} </h5>
                    <h5> Customer Email: {c.email}</h5>
                    <h5> Customer Mobile Number: {c.mobNo}</h5>
                    <h5> Customer Address: {c.address}</h5>
                    -------------------------------------
                </div>
            )
        )}
    </div>
        <Footer /></>
    );
}
export default Allcustomer;