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
    <div id="details">
        {itemDetails.map((item)=>(
                <div key={item.id}>
                    <h5 id="Items_new_sell"> ID: {item.itemID} </h5>
                    <h5 id="Items_new_sell"> Item Name: {item.itemName} </h5>
                    <h5 id="Items_new_sell"> Quantity: {item.quantity} </h5>
                    <h5 id="Items_new_sell"> Price: {item.price} </h5>
                    <h5 id="Items_new_sell"> Quality 1: {item.quality1} </h5>
                    <h5 id="Items_new_sell"> Quality 2: {item.quality2} </h5>
                    <h5 id="Items_new_sell"> Quality 3: {item.quality3} </h5>
                    -------------------------------------
                </div>
            )
        )}</div><div id='detailsnew'>
        <center>
       <button className="button-methish"><Link id="sign" to='/admin_homepage'>Back to Homepage</Link></button>
       </center>
       </div>
    
        <Footer /></>
    );
}
export default ViewItems;