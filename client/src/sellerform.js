import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import Header from './supplier_navbar'
import Footer from './footer'
import Axios from "axios";

import './index.css';
function SellerForm()
{

  const navigate=useNavigate()

    const [itemDetails, setItemDetails] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:9091/api/admin/displayitem', {
        }).then((response) => {
            setItemDetails(response.data);
        });
    }, []);

  const sellcottData={
      quantity : 0,
      quality_1 : 0,
      quality_2 : 0,
      quality_3 : 0
  };
  const jsonobjsellcott = JSON.stringify(sellcottData);
  console.log(jsonobjsellcott);
  localStorage.setItem("sellcottData",jsonobjsellcott);

  const selljutData={
    quantity : 0,
    quality_1 : 0,
    quality_2 : 0,
    quality_3 : 0
};
const jsonobjselljut = JSON.stringify(selljutData);
console.log(jsonobjselljut);
localStorage.setItem("selljutData",jsonobjselljut);

const sellcoffData={
  quantity : 0,
  quality_1 : 0,
  quality_2 : 0,
  quality_3 : 0
};
const jsonobjsellcoff = JSON.stringify(sellcoffData);
console.log(jsonobjsellcoff);
localStorage.setItem("sellcoffData",jsonobjsellcoff);

const sellsteelData={
quantity : 0,
quality_1 : 0,
quality_2 : 0,
quality_3 : 0
};
const jsonobjsellsteel = JSON.stringify(sellsteelData);
console.log(jsonobjsellsteel);
localStorage.setItem("sellsteelData",jsonobjsellsteel);

const sellalumData={
quantity : 0,
quality_1 : 0,
quality_2 : 0,
quality_3 : 0
};
const jsonobjsellalum = JSON.stringify(sellalumData);
console.log(jsonobjsellalum);
localStorage.setItem("sellalumData",jsonobjsellalum);

const sellcoppData={
quantity : 0,
quality_1 : 0,
quality_2 : 0,
quality_3 : 0
};
const jsonobjsellcopp = JSON.stringify(sellcoppData);
console.log(jsonobjsellcopp);
localStorage.setItem("sellcoppData",jsonobjsellcopp);

const sellwooData={
quantity : 0,
quality_1 : 0,
quality_2 : 0,
quality_3 : 0
};
const jsonobjsellwoo = JSON.stringify(sellwooData);
console.log(jsonobjsellwoo);
localStorage.setItem("sellwooData",jsonobjsellwoo);

const sellwheData={
quantity : 0,
quality_1 : 0,
quality_2 : 0,
quality_3 : 0
};
const jsonobjsellwhe = JSON.stringify(sellwheData);
console.log(jsonobjsellwhe);
localStorage.setItem("sellwheData",jsonobjsellwhe);

const sellbajData={
quantity : 0,
quality_1 : 0,
quality_2 : 0,
quality_3 : 0
};
const jsonobjsellbaj = JSON.stringify(sellbajData);
console.log(jsonobjsellbaj);
localStorage.setItem("sellbajData",jsonobjsellbaj);


const sellragData={
quantity : 0,
quality_1 : 0,
quality_2 : 0,
quality_3 : 0
};
const jsonobjsellrag = JSON.stringify(sellragData);
console.log(jsonobjsellrag);
localStorage.setItem("sellragData",jsonobjsellrag);


 
   
    return (
    
      
        <><Header /><div id="form">
            
          <center>
        <h1 id="Items_new_sell">
           Cotton 
           <h6>Quantity needed = <div>
               {itemDetails.map((item)=>(
                   item.itemName === "Cotton" ? (
                       <div key={item.id}>
                           {100-item.quantity}
                       </div>
                   ) : ("") )
               )}
           </div>
               <h4>Minimum quality required =" variable from backend"</h4> 
               <h4>Minimum quality required =" variable from backend"</h4> 
               <h4>Minimum quality required =" variable from backend"</h4> 
                <button id="button-result"><Link id="sign" to='/sell_cotton'>Supply now</Link></button></h6>

        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Jute <h6>Quantity needed = <div>
            {itemDetails.map((item)=>(
                item.itemName === "Jute" ? (
                    <div key={item.id}>
                        {100-item.quantity}
                    </div>
                ) : ("") )
            )}
        </div>
               <h4> Minimum quality required =" variable from backend" </h4>
                <button id="button-result"><Link id="sign" to='/sell_jute'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Coffee<h6>Quantity needed = <div>
            {itemDetails.map((item)=>(
                item.itemName === "Coffee" ? (
                    <div key={item.id}>
                        {100-item.quantity}
                    </div>
                ) : ("") )
            )}
        </div>
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_coffee'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Steel <h6>Quantity needed = <div>
            {itemDetails.map((item)=>(
                item.itemName === "Steel" ? (
                    <div key={item.id}>
                        {100-item.quantity}
                    </div>
                ) : ("") )
            )}
        </div>
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_steel'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Aluminium <h6>Quantity needed = <div>
            {itemDetails.map((item)=>(
                item.itemName === "Aluminium" ? (
                    <div key={item.id}>
                        {100-item.quantity}
                    </div>
                ) : ("") )
            )}
        </div>
                Minimum quality required = " variable from backend"
                <button id="button-result"><Link id="sign" to='/sell_aluminium'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Copper <h6>Quantity needed = <div>
            {itemDetails.map((item)=>(
                item.itemName === "Copper" ? (
                    <div key={item.id}>
                        {100-item.quantity}
                    </div>
                ) : ("") )
            )}
        </div>
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_copper'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Wood <h6>Quantity needed = <div>
            {itemDetails.map((item)=>(
                item.itemName === "Wood" ? (
                    <div key={item.id}>
                        {100-item.quantity}
                    </div>
                ) : ("") )
            )}
        </div>
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_wood'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Wheat <h6>Quantity needed = <div>
            {itemDetails.map((item)=>(
                item.itemName === "Wheat" ? (
                    <div key={item.id}>
                        {100-item.quantity}
                    </div>
                ) : ("") )
            )}
        </div>
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_wheat'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Bajra <h6>Quantity needed = <div>
            {itemDetails.map((item)=>(
                item.itemName === "Bajra" ? (
                    <div key={item.id}>
                        {100-item.quantity}
                    </div>
                ) : ("") )
            )}
        </div>
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_bajra'>Supply now</Link></button></h6>
           
        </h1>
      </center>
      <center>
        <h1 id="Items_new_sell">
           Ragi <h6>Quantity needed = <div>
            {itemDetails.map((item)=>(
                item.itemName === "Ragi" ? (
                    <div key={item.id}>
                        {100-item.quantity}
                    </div>
                ) : ("") )
            )}
        </div>
                Minimum quality required =" variable from backend" 
                <button id="button-result"><Link id="sign" to='/sell_ragi'>Supply now</Link></button></h6>
           
        </h1>
      </center>
            <Footer />
      </div></>
       
  
  )

}

export default SellerForm