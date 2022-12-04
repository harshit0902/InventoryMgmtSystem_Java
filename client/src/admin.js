import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'

function Admin()
{ const navigate=useNavigate()
    return (
    
      
    <><div>
     <center>
    <h1 id="Items_new_sell">
       ADMINISTRATOR HOMEPAGE 
           
       
   
       
    </h1>
  </center>
  <button ><Link id="sign" to='/add_item'>Add Item</Link></button>
  <button ><Link id="sign" to='/delete_item'>Delete Item</Link></button>
  <button ><Link id="sign" to='/edit_item'>Edit Item</Link></button>
  <button ><Link id="sign" to='/view_item'>View all Items</Link></button>
  <button ><Link id="sign" to='/shipping'>Order Shipping</Link></button>
  <button ><Link id="sign" to='/allcustomer'>View all customers</Link></button>
  <button ><Link id="sign" to='/allsupplier'>View all suppliers</Link></button>
 {/* <button onClick={()=> navigate('./edit_item')}>Edit Item</button>
 <button onClick={()=> navigate('./view_item')}>View list of all Items</button>
 <button onClick={()=> navigate('./shipping')}>Order Shipping</button>
 <button onClick={()=> navigate('./allcustomer')}>View list of all customers</button>
 <button onClick={()=> navigate('./allsupplier')}>View list of all suppliers</button> */}
      
  </div></>
   

)

}
export default Admin;