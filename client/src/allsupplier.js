import React, {useEffect} from 'react'

import { useState } from "react";
import Axios from "axios";
import Header from './admin_navbar'
import Footer from './footer'


function Allsupplier()
{
    const [supplierDetails, setsupplierDetails] = useState([]);

    useEffect(() => {
         Axios.get('http://localhost:9091/api/admin/displaysupplier', {
        }).then((response) => {
             setsupplierDetails(response.data);
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
                    All Suppliers
                </h1>
            </center>
        </div>
    <div>
        {supplierDetails.map((s)=>(
                <div key={s.email}>
                    <h5 id="Items_new_sell"> Supplier Name: {s.username} </h5>
                    <h5 id="Items_new_sell"> Supplier Email: {s.email}</h5>
                    <h5 id="Items_new_sell"> Supplier Mobile Number: {s.mobNo}</h5>
                    <h5 id="Items_new_sell"> Supplier Address: {s.address}</h5>
                    -------------------------------------
                </div>
            )
        )}
    </div>
        <Footer /></>
    );
}
export default Allsupplier;