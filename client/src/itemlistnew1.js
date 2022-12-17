import {useEffect, useState} from "react";
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import Header from './customer_navbar'
import Footer from './footer'
import Axios from "axios";

function App() {
    const navigate=useNavigate()
<<<<<<< HEAD
    return (
    
      
      <><Header /><div>
         <center>
      <h1 id="Items_new_sell">
          <h3> <button id="button-result"><Link id="sign" to='/cart'>Cart</Link></button></h3>
         
      </h1>
    </center>
        <center>
      <h1 id="Items_new_sell">
         Cotton <h3>Quantity available  <button id="button-result"><Link id="sign" to='/cotton'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new_sell">
         Jute <h3>Quantity available  <button id="button-result"><Link id="sign" to='/jute'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new_sell">
         Coffee <h3>Quantity available  <button id="button-result"><Link id="sign" to='/coffee'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new_sell">
         Steel <h3>Quantity available  <button id="button-result"><Link id="sign" to='/steel'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new_sell">
         Aluminium <h3>Quantity available  <button id="button-result"><Link id="sign" to='/aluminium'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new_sell">
         Copper <h3>Quantity available  <button id="button-result"><Link id="sign" to='/copper'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new_sell">
         Wood <h3>Quantity available  <button id="button-result"><Link id="sign" to='/wood'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new_sell">
         Wheat <h3>Quantity available  <button id="button-result"><Link id="sign" to='/wheat'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new_sell">
         Bajra <h3>Quantity available  <button id="button-result"><Link id="sign" to='/bajra'>Order now</Link></button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new_sell">
         Ragi <h3>Quantity available  <button id="button-result"><Link id="sign" to='/ragi'>Order now</Link></button></h3>
         
      </h1>
    </center>
    </div><Footer /></>
     
=======
    const [itemDetails, setItemDetails] = useState([]);
>>>>>>> main

    useEffect(() => {
        Axios.get('http://localhost:9091/api/admin/displayitem', {
        }).then((response) => {
            setItemDetails(response.data);
        });
    }, []);

    return (
        <><Header />
            <div>
                <center>
                    <h1 id="Items_new">
                        Cotton <h3>Quantity available <div>
                        {itemDetails.map((item)=>(
                            item.itemName === "Cotton" ? (
                                <div key={item.id}>
                                    {item.quantity}
                                </div>
                            ) : ("") )
                        )}
                    </div> <button id="button-result"><Link id="sign" to='/cotton'>Order now</Link></button></h3>

                    </h1>
                </center>
                <center>
                    <h1 id="Items_new">
                        Jute <h3>Quantity available <div>
                        {itemDetails.map((item)=>(
                            item.itemName === "Jute" ? (
                                <div key={item.id}>
                                    {item.quantity}
                                </div>
                            ) : ("") )
                        )}
                    </div> <button id="button-result"><Link id="sign" to='/jute'>Order now</Link></button></h3>

                    </h1>
                </center>
                <center>
                    <h1 id="Items_new">
                        Coffee <h3>Quantity available <div>
                        {itemDetails.map((item)=>(
                            item.itemName === "Coffee" ? (
                                <div key={item.id}>
                                    {item.quantity}
                                </div>
                            ) : ("") )
                        )}
                    </div> <button id="button-result"><Link id="sign" to='/coffee'>Order now</Link></button></h3>

                    </h1>
                </center>
                <center>
                    <h1 id="Items_new">
                        Steel <h3>Quantity available <div>
                        {itemDetails.map((item)=>(
                            item.itemName === "Steel" ? (
                                <div key={item.id}>
                                    {item.quantity}
                                </div>
                            ) : ("") )
                        )}
                    </div> <button id="button-result"><Link id="sign" to='/steel'>Order now</Link></button></h3>

                    </h1>
                </center>
                <center>
                    <h1 id="Items_new">
                        Aluminium <h3>Quantity available <div>
                        {itemDetails.map((item)=>(
                            item.itemName === "Aluminium" ? (
                                <div key={item.id}>
                                    {item.quantity}
                                </div>
                            ) : ("") )
                        )}
                    </div> <button id="button-result"><Link id="sign" to='/aluminium'>Order now</Link></button></h3>

                    </h1>
                </center>
                <center>
                    <h1 id="Items_new">
                        Copper <h3>Quantity available <div>
                        {itemDetails.map((item)=>(
                            item.itemName === "Copper" ? (
                                <div key={item.id}>
                                    {item.quantity}
                                </div>
                            ) : ("") )
                        )}
                    </div> <button id="button-result"><Link id="sign" to='/copper'>Order now</Link></button></h3>

                    </h1>
                </center>
                <center>
                    <h1 id="Items_new">
                        Wood <h3>Quantity available <div>
                        {itemDetails.map((item)=>(
                            item.itemName === "Wood" ? (
                                <div key={item.id}>
                                    {item.quantity}
                                </div>
                            ) : ("") )
                        )}
                    </div> <button id="button-result"><Link id="sign" to='/wood'>Order now</Link></button></h3>

                    </h1>
                </center>
                <center>
                    <h1 id="Items_new">
                        Wheat <h3>Quantity available <div>
                        {itemDetails.map((item)=>(
                            item.itemName === "Wheat" ? (
                                <div key={item.id}>
                                    {item.quantity}
                                </div>
                            ) : ("") )
                        )}
                    </div> <button id="button-result"><Link id="sign" to='/wheat'>Order now</Link></button></h3>

                    </h1>
                </center>
                <center>
                    <h1 id="Items_new">
                        Bajra <h3>Quantity available <div>
                        {itemDetails.map((item)=>(
                            item.itemName === "Bajra" ? (
                                <div key={item.id}>
                                    {item.quantity}
                                </div>
                            ) : ("") )
                        )}
                    </div> <button id="button-result"><Link id="sign" to='/bajra'>Order now</Link></button></h3>

                    </h1>
                </center>
                <center>
                    <h1 id="Items_new">
                        Ragi <h3>Quantity available <div>
                        {itemDetails.map((item)=>(
                            item.itemName === "Ragi" ? (
                                <div key={item.id}>
                                    {item.quantity}
                                </div>
                            ) : ("") )
                        )}
                    </div> <button id="button-result"><Link id="sign" to='/ragi'>Order now</Link></button></h3>

                    </h1>
                </center>
            </div><Footer /></>


    )

}
  export default App;
  