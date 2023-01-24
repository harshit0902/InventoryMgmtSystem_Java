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
            
           <div class="flex-container">
                    <div>
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
              
                <button id="button-result"><Link id="sign" to='/sell_cotton'>Supply now</Link></button></h6>

        </h1>
      </center>
                    </div>
                    <div>
                        <img src="https://www.orfonline.org/wp-content/uploads/2022/10/cotton-production.jpg" alt="Cotton" width="300px" height="300px"></img>
                    </div>
                </div>
       <div class="flex-container">
                    <div>
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
              
                <button id="button-result"><Link id="sign" to='/sell_jute'>Supply now</Link></button></h6>
           
        </h1>
      </center>
                    </div>
                    <div>
                        <img src="https://textilevaluechain.in/wp-content/uploads/2020/09/JUTE-27-11-19.jpg" alt="Jute" width="300px" height="300px"></img>
                    </div>
                </div>
       <div class="flex-container">
                    <div>
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
               
                <button id="button-result"><Link id="sign" to='/sell_coffee'>Supply now</Link></button></h6>
           
        </h1>
      </center>
                    </div>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/220px-Roasted_coffee_beans.jpg" alt="Coffee" width="300px" height="300px"></img>
                    </div>
                </div>
       <div class="flex-container">
                    <div>
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
                
                <button id="button-result"><Link id="sign" to='/sell_steel'>Supply now</Link></button></h6>
           
        </h1>
      </center>
                    </div>
                    <div>
                        <img src="https://www.rapiddirect.com/wp-content/uploads-v0/2021/03/stainless-steel-types.jpg" alt="Steel" width="300px" height="300px"></img>
                    </div>
                </div>
       <div class="flex-container">
                    <div>
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
               
                <button id="button-result"><Link id="sign" to='/sell_aluminium'>Supply now</Link></button></h6>
           
        </h1>
      </center>
                    </div>
                    <div>
                       <img src="https://media.istockphoto.com/id/1329224879/photo/raw-aluminum-sheets.jpg?s=612x612&w=0&k=20&c=riymPNoC7nJivnEQ0I-QpGxrAGgtERmFPITJYuql9kA=" alt="Aluminium" width="300px" height="300px"></img>
                    </div>
                </div>
       <div class="flex-container">
                    <div>
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
                
                <button id="button-result"><Link id="sign" to='/sell_copper'>Supply now</Link></button></h6>
           
        </h1>
      </center>
                    </div>
                    <div>
                        <img src="http://www.aculon.com/wp-content/uploads/2020/10/Copper.jpg" alt="Copper" width="300px" height="300px"></img>
                    </div>
                </div>
       <div class="flex-container">
                    <div>
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
               
                <button id="button-result"><Link id="sign" to='/sell_wood'>Supply now</Link></button></h6>
           
        </h1>
      </center>
                    </div>
                    <div>
                        <img src="https://static.scientificamerican.com/blogs/cache/file/7468562B-7EBC-4D8A-B6820036ED274FA7_source.jpg?w=690&h=930&4866B8A3-9660-4D40-A221BEA24E521B1A" alt="Wood" width="300px" height="300px"></img>
                    </div>
                </div>
       <div class="flex-container">
                    <div>
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
               
                <button id="button-result"><Link id="sign" to='/sell_wheat'>Supply now</Link></button></h6>
           
        </h1>
      </center>
                    </div>
                    <div>
                         <img src="https://cdn.britannica.com/90/94190-050-C0BA6A58/Cereal-crops-wheat-reproduction.jpg" alt="Wheat" width="300px" height="300px"></img>
                    </div>
                </div>
       <div class="flex-container">
                    <div>
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
               
                <button id="button-result"><Link id="sign" to='/sell_bajra'>Supply now</Link></button></h6>
           
        </h1>
      </center>
                    </div>
                    <div>
                          <img src="https://rukminim1.flixcart.com/image/416/416/jxdkpzk0/plant-seed/g/m/z/14000-hybrid-bajra-pearl-millet-seeds-14-kgs-seeds-green-world-original-imafhtq3umyragee.jpeg?q=70" alt="Bajra" width="300px" height="300px"></img>
                    </div>
                </div>
       <div class="flex-container">
                    <div>
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
              
                <button id="button-result"><Link id="sign" to='/sell_ragi'>Supply now</Link></button></h6>
           
        </h1>
      </center>
                    </div>
                    <div>
                         <img src="https://static.toiimg.com/thumb/93307960.cms?width=680&height=512&imgsize=70070" alt="Ragi" width="300px" height="300px"></img>
                    </div>
                </div>
            <Footer />
      </div></>
       
  
  )

}

export default SellerForm