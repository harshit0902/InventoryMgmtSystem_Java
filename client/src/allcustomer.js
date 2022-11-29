import React, {useEffect} from 'react'

import { useState } from "react";
import Axios from "axios";



function Allcustomer()
{
    const [customerDetails, setcustomerDetails] = useState([]);

    useEffect(() => {
         Axios.get('http://localhost:9091/api/admin/displayitem', {
        }).then((response) => {
             setcustomerDetails(response.data);
            /*console.log(response)
           if (response.data != null) {
               window.location.href = "http://localhost:3000/login";
            }*/
        });
    }, []);

    return (
        <>
    <div>
        {customerDetails.map((c)=>(
                <div key={c.id}>
                    <h5> Customer Name: {c.Name} </h5>
                    <h5>Customer Email: {c.email}</h5>
                    -------------------------------------
                </div>
            )
        )}
    </div>
        </>
    );
}
export default Allcustomer;