import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import Header from './supplier_navbar'
import Footer from './footer'

function SellerForm1()
{
  const navigate=useNavigate()
  return (
    
      
    <><Header /><div>
          <center>
        <h1 id="Items_new_sell">
           Cotton 
           <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                Minimum quality required =" variable from backend"
                Minimum quality required =" variable from backend"
                <button id="button-result"><Link id="sign" to='/sell_cotton'>Supply now</Link></button></h6>

        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Jute <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_jute'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Coffee<h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_coffee'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Steel <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_steel'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Aluminium <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_aluminium'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Copper <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_copper'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Wood <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_wood'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Wheat <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_wheat'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Bajra <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_bajra'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Ragi <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_ragi'>Supply now</Link></button></h6>
           
        </h1>
      </center>

       
  </div><Footer /></>
   

)

}

export default SellerForm1