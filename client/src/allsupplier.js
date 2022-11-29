import React, {useEffect} from 'react'

import { useState } from "react";
import Axios from "axios";



function Allsupplier()
{
    const [supplierDetails, setsupplierDetails] = useState([]);

    useEffect(() => {
         Axios.get('http://localhost:9091/api/admin/displayitem', {
        }).then((response) => {
             setsupplierDetails(response.data);
            /*console.log(response)
           if (response.data != null) {
               window.location.href = "http://localhost:3000/login";
            }*/
        });
    }, []);

    return (
        <>
    <div>
        {supplierDetails.map((s)=>(
                <div key={s.id}>
                    <h5> Supplier Name: {s.Name} </h5>
                    <h5>Supplier Email: {s.email}</h5>
                    -------------------------------------
                </div>
            )
        )}
    </div>
        </>
    );
}
export default Allsupplier;