import React from "react";
import {useEffect, useState} from "react";
import Axios from "axios";
import Header from './admin_navbar'
import Footer from './footer'
import {Link} from "react-router-dom";

let count = 0;
function App() {

    const [id, setid] = useState();
    const [name, setname] =useState("");
    const [qty, setqty] = useState();
    const [price, setprice] = useState();
    const [quality1, setquality1] = useState();
    const [quality2, setquality2] = useState();
    const [quality3, setquality3] = useState();
    /*console.log(response)*/

useEffect(() => {
    if(count == 0 && name==="Cotton" || name==="Jute" || name==="Coffee" || name==="Steel" || name==="Aluminium" || name==="Copper" || name==="Wood" || name==="Wheat" || name==="Bajra" || name==="Ragi" || name==="Iron") {
        Axios.post('http://localhost:9091/api/admin/getdata', {
            itemName: name
        }).then((response) => {
            //setItemDetails(response.data);
            setid(response.data.itemID);
            setname(response.data.itemName);
            setqty(response.data.quantity);
            setprice(response.data.price);
            setquality1(response.data.quality1);
            setquality2(response.data.quality2);
            setquality3(response.data.quality3);
            console.log(count);
            count += 1;
            /*console.log(response)
            if (response.data != null) {
                window.location.href = "http://localhost:3000/login";
            }*/
        });
    }}, [name]);

    const savedetail = () => {
        Axios.put('http://localhost:9091/api/admin/modifyitem', {
            itemID: id,
            itemName: name,
            quantity: qty,
            price: price,
            quality1: quality1,
            quality2: quality2,
            quality3: quality3
        }).then((response) => {
            // setUserdetails(response.data);
            console.log(response)
            if (response.data == 'success') {
                window.location.href = "http://localhost:3000/login";
            }
        });
    }

return (
    
      
    <><Header /><div>
  <center>
    <h1 id="cot">
      Edit an Item
    </h1>
  </center>
</div><div id="details">
        {/*<div>
      <label>Enter Item Id </label>
      <input type="number" placeholder='Item Id'
        onChange={(event) => { setid(event.target.value); } }></input>
         <br></br>
    </div>*/}
<div>
      <label>Enter Itemname </label>
      <input type="text" placeholder={'Enter item name' + name}
        onChange={(event) => { setname(event.target.value); } }></input>
         <br></br>
    </div>
    <div>
      <label>Enter Quantity </label>
      <input type="number" placeholder={qty}
        onChange={(event) => { setqty(event.target.value); } }></input>
         <br></br>
    </div>

        <div>
            <label>Enter Price </label>
            <input type="number" placeholder={price}
                   onChange={(event) => { setprice(event.target.value); } }></input>
            <br></br>
        </div>
    
    <div>
        <label>Enter Quality1 required </label>
      <input type="number" placeholder={quality1}
       onChange={(event) => { setquality1(event.target.value); } } ></input>
         

         <br></br>
    </div>
    <div>
        <label>Enter Quality2 required </label>
      <input type="number" placeholder={quality2}
        onChange={(event) => { setquality2(event.target.value); } }></input>
         <br></br>
    </div>
    
    <div>
        <label>Enter Quality3 required </label>
      <input type="number" placeholder={quality3}
        onChange={(event) => { setquality3(event.target.value); } }></input>
         <br></br>
    </div>
    <div id='detailsnew'>
      <center>
     <button className="button-methish" onClick={savedetail}><Link id="sign" to='/admin_homepage'>Edit Item</Link></button>
     </center>
     </div>
    

  </div><Footer /></>

)
}
export default App;