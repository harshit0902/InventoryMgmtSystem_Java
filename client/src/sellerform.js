import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function SellerForm()
{
    const navigate=useNavigate()
   
   
    return (
    
      
        <><div>
          <center>
        <h1 id="Items_new_sell">
           Cotton 
           <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                Minimum quality required =" variable from backend"
                Minimum quality required =" variable from backend"
            <button onClick={()=> navigate('./sell_cotton')}>Supply now</button></h6>

        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Jute <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button onClick={()=> navigate('./jute')}>Supply now</button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Coffee<h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button onClick={()=> navigate('./coffee')}>Supply now</button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Steel <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button onClick={()=> navigate('./steel')}>Supply now</button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Aluminium <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button onClick={()=> navigate('./aluminium')}>Supply now</button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Copper <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button onClick={()=> navigate('./copper')}>Supply now</button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Wood <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button onClick={()=> navigate('./wood')}>Supply now</button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Wheat <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button onClick={()=> navigate('./wheat')}>Supply now</button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Bajra <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button onClick={()=> navigate('./bajra')}>Supply now</button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Ragi <h6>Quantity needed  ="variable from backend" 
                Minimum quality required =" variable from backend" 
                <button onClick={()=> navigate('./ragi')}>Supply now</button></h6>
           
        </h1>
      </center>
      </div></>
       
  
  )

}

export default SellerForm