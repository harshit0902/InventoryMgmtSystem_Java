import { useState } from "react";
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'

function App() {
    const navigate=useNavigate()
    return (
    
      
      <><div>
         <center>
      <h1 id="Items_new">
          <h3> <button id="button-result"><Link id="sign" to='/cart'>Cart</Link></button></h3>
         
      </h1>
    </center>
        <center>
      <h1 id="Items_new">
         Cotton <h3>Quantity available  <button id="button-result"><Link id="sign" to='/cotton'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Jute <h3>Quantity available  <button id="button-result"><Link id="sign" to='/jute'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Coffee <h3>Quantity available  <button id="button-result"><Link id="sign" to='/coffee'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Steel <h3>Quantity available  <button id="button-result"><Link id="sign" to='/steel'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Aluminium <h3>Quantity available  <button id="button-result"><Link id="sign" to='/aluminium'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Copper <h3>Quantity available  <button id="button-result"><Link id="sign" to='/copper'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Wood <h3>Quantity available  <button id="button-result"><Link id="sign" to='/wood'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Wheat <h3>Quantity available  <button id="button-result"><Link id="sign" to='/wheat'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Bajra <h3>Quantity available  <button id="button-result"><Link id="sign" to='/bajra'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Ragi <h3>Quantity available  <button id="button-result"><Link id="sign" to='/ragi'>Order now</Link></button></h3>
         
      </h1>
    </center>
    </div></>
     

)
  }
  export default App;
  