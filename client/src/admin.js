import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Admin()
{ const navigate=useNavigate()
    return (
    
      
    <><div>
     <center>
    <h1 id="Items_new_sell">
       ADMINISTRATOR HOMEPAGE 
           
       
   
       
    </h1>
  </center>
 <button onClick={()=> navigate('./add_item')}>Add Item</button>
 {/* <button onClick={()=> navigate('./delete item')}>Delete Item</button>
 <button onClick={()=> navigate('./edit_item')}>Edit Item</button>
 <button onClick={()=> navigate('./view_item')}>View list of all Items</button>
 <button onClick={()=> navigate('./shipping')}>Order Shipping</button>
 <button onClick={()=> navigate('./allcustomer')}>View list of all customers</button>
 <button onClick={()=> navigate('./allsupplier')}>View list of all suppliers</button> */}
      
  </div></>
   

)

}
export default Admin;