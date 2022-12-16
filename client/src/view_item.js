import React, {useEffect} from 'react'
import { useState } from "react";
import Axios from "axios";
import Header from './supplier_navbar'
import Footer from './footer'
import {Link} from "react-router-dom";

const items =[
    {
        name:"Apple",
        id: 123
    },
    {
        name:"Apple",
        id: 321
    },
    {
        name:"Apple",
        id: 132
    }

];

function ViewItems()
{
    const [itemDetails, setItemDetails] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:9091/api/admin/displayitem', {
        }).then((response) => {
            setItemDetails(response.data);
            /*console.log(response)
            if (response.data != null) {
                window.location.href = "http://localhost:3000/login";
            }*/
        });
    }, []);

    return (
        <><Header />
    <div>
        {itemDetails.map((item)=>(
                <div key={item.id}>
                    <h5> ID: {item.itemID} </h5>
                    <h5> Item Name: {item.itemName} </h5>
                    <h5> Quantity: {item.quantity} </h5>
                    <h5> Price: {item.price} </h5>
                    <h5> Quality 1: {item.quality1} </h5>
                    <h5> Quality 2: {item.quality2} </h5>
                    <h5> Quality 3: {item.quality3} </h5>
                    -------------------------------------
                </div>
            )
        )}
        <button><Link id="sign" to='/admin_homepage'>Back to homepage</Link></button>
    </div>
        <Footer /></>
    );
}
export default ViewItems;