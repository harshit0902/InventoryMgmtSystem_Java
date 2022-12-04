import React from "react";
import { useState } from "react";
import Axios from "axios";

let cart=[];
let send=[];
//import { useState } from "react";

function App() {

    const sellcott= localStorage.getItem("sellcottData");
    const sellcottobj =JSON.parse(sellcott);
    const selljut= localStorage.getItem("selljutData");
    const selljutobj =JSON.parse(selljut);
    const sellcoff= localStorage.getItem("sellcoffData");
    const sellcoffobj =JSON.parse(sellcoff);
    const sellsteel= localStorage.getItem("sellsteelData");
    const sellsteelobj =JSON.parse(sellsteel);
    const sellalum= localStorage.getItem("sellalumData");
    const sellalumobj =JSON.parse(sellalum);
    const sellcopp= localStorage.getItem("sellcoppData");
    const sellcoppobj =JSON.parse(sellcopp);
    const sellwoo= localStorage.getItem("sellwooData");
    const sellwooobj =JSON.parse(sellwoo);
    const sellwhe= localStorage.getItem("sellwheData");
    const sellwheobj =JSON.parse(sellwhe);
    const sellbaj= localStorage.getItem("sellbajData");
    const sellbajobj =JSON.parse(sellbaj);
    const sellrag= localStorage.getItem("sellragData");
    const sellragobj =JSON.parse(sellrag);



     const savedetail = () => {
         for(let i=0 ; i<cart.length ; i++)
         {
             if(cart[i].quantity > 0){
                 send.push(cart[i]);
             }
         }

         const pass = {"it":send}
         console.log(send);
         console.log(pass);
         Axios.post('http://localhost:9091/api/sell/normal', {
             it: send
         }).then((response) => {
             // setUserdetails(response.data);
             console.log(response)
             if (response.data == 'success') {
                 //window.location.href = "http://localhost:3000/login";
             }
         });
     }

    function multiple() {
        let i1 = 'a';
        let i2 = 'b';
        let i3 = 'c';
        let i4 = 'd';
        let i5 = 'e';
        let i6 = 'f';
        let i7 = 'g';
        let i8 = 'h';
        let i9 = 'i';
        let i10 = 'j';
        cart.push({itemName:i1, quantity:0, quality1:0, quality2:0, quality3:0});
        cart.push({itemName:i2, quantity:0, quality1:0, quality2:0, quality3:0});
        cart.push({itemName:i3, quantity:0, quality1:0, quality2:0, quality3:0});
        cart.push({itemName:i4, quantity:0, quality1:0, quality2:0, quality3:0});
        cart.push({itemName:i5, quantity:0, quality1:0, quality2:0, quality3:0});
        cart.push({itemName:i6, quantity:0, quality1:0, quality2:0, quality3:0});
        cart.push({itemName:i7, quantity:0, quality1:0, quality2:0, quality3:0});
        cart.push({itemName:i8, quantity:0, quality1:0, quality2:0, quality3:0});
        cart.push({itemName:i9, quantity:0, quality1:0, quality2:0, quality3:0});
        cart.push({itemName:i10, quantity:0, quality1:0, quality2:0, quality3:0});
        console.log(cart);
        cart[0].itemName='Cotton';
        cart[1].itemName='Jute';
        cart[2].itemName='Coffee';
        cart[3].itemName='Steel';
        cart[4].itemName='Aluminium';
        cart[5].itemName='Copper';
        cart[6].itemName='Wood';
        cart[7].itemName='Wheat';
        cart[8].itemName='Bajra';
        cart[9].itemName='Ragi';
        cart[0].quantity=sellcottobj.quantity;
        cart[1].quantity=selljutobj.quantity;
        cart[2].quantity=sellcoffobj.quantity;
        cart[3].quantity=sellsteelobj.quantity;
        cart[4].quantity=sellalumobj.quantity;
        cart[5].quantity=sellcoppobj.quantity;
        cart[6].quantity=sellwooobj.quantity;
        cart[7].quantity=sellwheobj.quantity;
        cart[8].quantity=sellbajobj.quantity;
        cart[9].quantity=sellragobj.quantity;
        cart[0].quality1=sellcottobj.quality_1;
        cart[1].quality1=selljutobj.quality_1;
        cart[2].quality1=sellcoffobj.quality_1;
        cart[3].quality1=sellsteelobj.quality_1;
        cart[4].quality1=sellalumobj.quality_1;
        cart[5].quality1=sellcoppobj.quality_1;
        cart[6].quality1=sellwooobj.quality_1;
        cart[7].quality1=sellwheobj.quality_1;
        cart[8].quality1=sellbajobj.quality_1;
        cart[9].quality1=sellragobj.quality_1;
        cart[0].quality2=sellcottobj.quality_2;
        cart[1].quality2=selljutobj.quality_2;
        cart[2].quality2=sellcoffobj.quality_2;
        cart[3].quality2=sellsteelobj.quality_2;
        cart[4].quality2=sellalumobj.quality_2;
        cart[5].quality2=sellcoppobj.quality_2;
        cart[6].quality2=sellwooobj.quality_2;
        cart[7].quality2=sellwheobj.quality_2;
        cart[8].quality2=sellbajobj.quality_2;
        cart[9].quality2=sellragobj.quality_2;
        cart[0].quality3=sellcottobj.quality_3;
        cart[1].quality3=selljutobj.quality_3;
        cart[2].quality3=sellcoffobj.quality_3;
        cart[3].quality3=sellsteelobj.quality_3;
        cart[4].quality3=sellalumobj.quality_3;
        cart[5].quality3=sellcoppobj.quality_3;
        cart[6].quality3=sellwooobj.quality_3;
        cart[7].quality3=sellwheobj.quality_3;
        cart[8].quality3=sellbajobj.quality_3;
        cart[9].quality3=sellragobj.quality_3;

    }

    function display() {
        for(let i=0 ; i<cart.length ; i++)
        {
            if(cart[i].quantity > 0){
              console.log(cart[i].quantity+1);
                console.log(cart[i].itemName);}
        }
    }


return (
    <><div>
    <center>
      <h1 id="cart">
        Cart
      </h1>
    </center>
  </div>

        <button onClick={multiple}>check</button>
        <button onClick={savedetail}>Hello</button>

        {/*<button onClick={val}>Hello</button>
      {
        cart.map((val)=>{
          return <>
            <div>
              {val.itemName}
              <br></br>
              {val.quality1}
            </div>
          </>
        })
       }*/}

       {/* cart[0].itemName = "Steel"; */}

        {/* <button>Special Request?</button> */}

    </>


        )
}

export default App;