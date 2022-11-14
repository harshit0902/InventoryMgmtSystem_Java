
import { useState } from "react";
import React from 'react'
import {useNavigate} from 'react-router-dom'


function App() {
    const navigate=useNavigate()

    const cottData={
        quantity : 0,
        quality_1 : 0,
        quality_2 : 0,
        quality_3 : 0
    };
    const jsonobjcott = JSON.stringify(cottData);
    console.log(jsonobjcott);
    localStorage.setItem("cottData",jsonobjcott);

    const jutData={
      quantity : 0,
      quality_1 : 0,
      quality_2 : 0,
      quality_3 : 0
  };
  const jsonobjjut = JSON.stringify(jutData);
  console.log(jsonobjjut);
  localStorage.setItem("jutData",jsonobjjut);

  const coffData={
    quantity : 0,
    quality_1 : 0,
    quality_2 : 0,
    quality_3 : 0
};
const jsonobjcoff = JSON.stringify(coffData);
console.log(jsonobjcoff);
localStorage.setItem("coffData",jsonobjcoff);

const steelData={
  quantity : 0,
  quality_1 : 0,
  quality_2 : 0,
  quality_3 : 0
};
const jsonobjsteel = JSON.stringify(steelData);
console.log(jsonobjsteel);
localStorage.setItem("steelData",jsonobjsteel);

const alumData={
  quantity : 0,
  quality_1 : 0,
  quality_2 : 0,
  quality_3 : 0
};
const jsonobjalum = JSON.stringify(alumData);
console.log(jsonobjalum);
localStorage.setItem("alumData",jsonobjalum);

const coppData={
  quantity : 0,
  quality_1 : 0,
  quality_2 : 0,
  quality_3 : 0
};
const jsonobjcopp = JSON.stringify(coppData);
console.log(jsonobjcopp);
localStorage.setItem("coppData",jsonobjcopp);

const wooData={
  quantity : 0,
  quality_1 : 0,
  quality_2 : 0,
  quality_3 : 0
};
const jsonobjwoo = JSON.stringify(wooData);
console.log(jsonobjwoo);
localStorage.setItem("wooData",jsonobjwoo);

const wheData={
  quantity : 0,
  quality_1 : 0,
  quality_2 : 0,
  quality_3 : 0
};
const jsonobjwhe = JSON.stringify(wheData);
console.log(jsonobjwhe);
localStorage.setItem("wheData",jsonobjwhe);

const bajData={
  quantity : 0,
  quality_1 : 0,
  quality_2 : 0,
  quality_3 : 0
};
const jsonobjbaj = JSON.stringify(bajData);
console.log(jsonobjbaj);
localStorage.setItem("bajData",jsonobjbaj);


const ragData={
  quantity : 0,
  quality_1 : 0,
  quality_2 : 0,
  quality_3 : 0
};
const jsonobjrag = JSON.stringify(ragData);
console.log(jsonobjrag);
localStorage.setItem("ragData",jsonobjrag);


   
return (
    
      
      <><div>
        <center>
      <h1 id="Items_new">
         Cotton <h3>Quantity available <button onClick={()=> navigate('./cotton')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Jute <h3>Quantity available <button onClick={()=> navigate('./jute')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Coffee <h3>Quantity available <button onClick={()=> navigate('./coffee')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Steel <h3>Quantity available <button onClick={()=> navigate('./steel')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Aluminium <h3>Quantity available <button onClick={()=> navigate('./aluminium')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Copper <h3>Quantity available <button onClick={()=> navigate('./copper')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Wood <h3>Quantity available <button onClick={()=> navigate('./wood')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Wheat <h3>Quantity available <button onClick={()=> navigate('./wheat')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Bajra <h3>Quantity available <button onClick={()=> navigate('./bajra')}>Order now</button></h3>
         
      </h1>
    </center>
    <center>
      <h1 id="Items_new">
         Ragi <h3>Quantity available <button onClick={()=> navigate('./ragi')}>Order now</button></h3>
         
      </h1>
    </center>
    </div></>
     

)
}
export default App;
