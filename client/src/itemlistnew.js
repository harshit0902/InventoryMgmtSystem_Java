
import { useState } from "react";
import React from 'react'
import {useNavigate} from 'react-router-dom'


function App() {
    const navigate=useNavigate()
    
return (
    
      
      <><div>
    <center>
      <h1 id="Items_new">
         Coffee <h3>Quantity available <button onClick={()=> navigate('./coffee')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Bajra <h3>Quantity available <button onClick={()=> navigate('./bajra')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Wheat <h3>Quantity available <button onClick={()=> navigate('./wheat')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Copper <h3>Quantity available <button onClick={()=> navigate('./copper')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Jute <h3>Quantity available <button onClick={()=> navigate('./jute')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Steel <h3>Quantity available <button onClick={()=> navigate('./steel')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Wood <h3>Quantity available <button onClick={()=> navigate('./wood')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Ragi <h3>Quantity available <button onClick={()=> navigate('./ragi')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Aluminium <h3>Quantity available <button onClick={()=> navigate('./aluminium')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Cotton <h3>Quantity available <button onClick={()=> navigate('./cotton')}>Order now</button></h3>
         
      </h1>
    </center>
    </div></>
     

)
}
export default App;
