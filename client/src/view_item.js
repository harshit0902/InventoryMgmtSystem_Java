import React from 'react'

import { useState } from "react";
import Axios from "axios";

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

    Axios.get('http://localhost:9091/api/admin/displayitem', {
    }).then((response) => {
        setItemDetails(response.data);
        console.log(response)
        if (response.data != null) {
            window.location.href = "http://localhost:3000/login";
        }
    });


    return (
        <>
    <div>
        {itemDetails.map((item)=>(
                <div key={item.id}>
                    <h5> Name: {item.name} ID: {item.id}
                    </h5>
                </div>
            )
        )}
    </div>
        </>
    );
}
export default ViewItems;