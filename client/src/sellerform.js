import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'

function SellerForm()
{
  const navigate=useNavigate()

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
    
      
        <><div>
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

           
      </div></>
       
  
  )

}

export default SellerForm