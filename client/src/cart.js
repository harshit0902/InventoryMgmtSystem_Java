import React, {useEffect, useState} from "react";
import Axios from "axios";

let cart=[];
//let cart=[];
let send=[];
let s = "";
let val=0;
//import { useState } from "react";

function Cart() {

    const [cart, setCart] = useState([]);
    const cott= localStorage.getItem("cottData");
    const cottobj =JSON.parse(cott);
    const jut= localStorage.getItem("jutData");
    const jutobj =JSON.parse(jut);
    const coff= localStorage.getItem("coffData");
    const coffobj =JSON.parse(coff);
    const steel= localStorage.getItem("steelData");
    const steelobj =JSON.parse(steel);
    const alum= localStorage.getItem("alumData");
    const alumobj =JSON.parse(alum);
    const copp= localStorage.getItem("coppData");
    const coppobj =JSON.parse(copp);
    const woo= localStorage.getItem("wooData");
    const wooobj =JSON.parse(woo);
    const whe= localStorage.getItem("wheData");
    const wheobj =JSON.parse(whe);
    const baj= localStorage.getItem("bajData");
    const bajobj =JSON.parse(baj);
    const rag= localStorage.getItem("ragData");
    const ragobj =JSON.parse(rag);
    /*const [quantity, setquantity] = useState(0);
    const [quality1, setquality1] = useState(0);
    const [quality2, setquality2] = useState(0);
    const [quality3, setquality3] = useState(0);
    let quality1=parseInt(quality1);
    let quality2=parseInt(quality2);
    let quality3=parseInt(quality3);
    let quantity1=parseInt(quantity);*/
    //const cart = [];
    // const [cart,setCart]=useState([]);
    //setCart([...textarr,{parsedobj }]);
    // function localstorage1() {

    // console.log(parsedobj);
    // }
// function val() {
//     const dtr= localStorage.getItem("steelData");
//     console.log(dtr);
//     const parsedobj =JSON.parse(dtr);
//     let i = 'steel';
//     // setCart([...cart, {itemName:i, quantity:0, quality1:0, quality2:0, quality3:0}]);
//     const cart1 = {
//      itemNAme : "steel",
//       q_1 : parsedobj.quality_1 ,
//      q_2 : parsedobj.quality_2 ,

//           itemNAme : "Cotton"
//     }
//     // console.log(cart);
//     // cart[0].itemName = 'Steel';
//     // cart[0].quantity = parsedobj.quantity;
//     // console.log(cart1[0].itemName);
//     // console.log(cart1[0].quantity);
//     console.log(cart1);
//     const jsonobj1 = JSON.stringify(cart1);
//     console.log(jsonobj1);
//     localStorage.setItem("cart1",jsonobj1);

//     const ctr= localStorage.getItem("cart1");

    /*function val() {
        const dtr= localStorage.getItem("steelData");
        console.log(dtr);
        const parsedobj =JSON.parse(dtr);
        let i = 'steel';
        // setCart([...cart, {itemName:i, quantity:0, quality1:0, quality2:0, quality3:0}]);
        const cart1 = {
         itemNAme : "steel",
          q_1 : parsedobj.quality_1 ,
         q_2 : parsedobj.quality_2 ,

              itemNAme : "Cotton"
        }*/
    // console.log(cart);
    // cart[0].itemName = 'Steel';
    // cart[0].quantity = parsedobj.quantity;
    // console.log(cart1[0].itemName);
    // console.log(cart1[0].quantity);
    /*console.log(cart1);
    const jsonobj1 = JSON.stringify(cart1);
    console.log(jsonobj1);
    localStorage.setItem("cart1",jsonobj1);

    const ctr= localStorage.getItem("cart1");
    const parsedobj1 =JSON.parse(ctr);
    console.log(parsedobj1);
    console.log(parsedobj1.q_1,parsedobj1.q_2,parsedobj1.itemNAme[0],parsedobj1.itemNAme[1]);
}*/
//     const parsedobj1 =JSON.parse(ctr);
//     console.log(parsedobj1);
//     console.log(parsedobj1.q_1,parsedobj1.q_2,parsedobj1.itemNAme[0],parsedobj1.itemNAme[1]);
// }
// let [cart,setCart]=useState([]);
    /*function val() {
        let i = 'steel';
        // setCart([...cart, {itemName:i, quantity:0, quality1:0, quality2:0, quality3:0}]);
        cart.push({itemName:i, quantity:0, quality1:0, quality2:0, quality3:0});
        // console.log(cart);
        cart[0].itemName='Wheat';
        console.log(cart);
        /*const ctr= localStorage.getItem("bajData");
        const parsedobj1 =JSON.parse(ctr);
        cart[0].itemName = 'baj';
        cart[0].quantity = parsedobj1.quantity;
        cart[0].quality1 = parsedobj1.quality_1;
        cart[0].quality2 = parsedobj1.quality_2;
        cart[0].quality3 = parsedobj1.quality_3;
        console.log(cart);*/
    //}
    // const deleteval = () {
    //   return(
    //     <div>
    //     {cart.map((item)=>(
    //         item.quantity>0 ? (
    //             <div key={item.itemName}>
    //                 <h5> Item Name: {item.itemName} </h5>
    //                 <h5> Quantity: {item.quantity} </h5>
    //                 <h5> Quality 1: {item.quality1} </h5>
    //                 <h5> Quality 2: {item.quality2} </h5>
    //                 <h5> Quality 3: {item.quality3} </h5>
    //                 <h5><button onClick={ ()=> {item.quantity=0,item.quality1=0,item.quality2=0,item.quality3=0
    //                ,deleteval }
    //                }>Delete</button></h5>
    //                 -------------------------------------
    //             </div>
    //         ) : ("") )
    //     )}
    // </div>
    //   )
    // }
    const savedetail = () => {
        for(let i=0 ; i<cart.length ; i++)
        {
            if(cart[i].quantity > 0){
                send.push(cart[i]);
            }
        }
        const pass = {"it":send}
        console.log(send);
        //console.log(pass);
        Axios.post('http://localhost:9091/api/buy/normal', {
            it: send
        }).then((response) => {
            // setUserdetails(response.data);
            console.log(response)
            if (response.data == 'success') {
                window.location.href = "http://localhost:3000/login";
            }
        });
    }
    //function multiple() {
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
    //console.log(cart);
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
    cart[0].quantity=cottobj.quantity;
    cart[1].quantity=jutobj.quantity;
    cart[2].quantity=coffobj.quantity;
    cart[3].quantity=steelobj.quantity;
    cart[4].quantity=alumobj.quantity;
    cart[5].quantity=coppobj.quantity;
    cart[6].quantity=wooobj.quantity;
    cart[7].quantity=wheobj.quantity;
    cart[8].quantity=bajobj.quantity;
    cart[9].quantity=ragobj.quantity;
    cart[0].quality1=cottobj.quality_1;
    cart[1].quality1=jutobj.quality_1;
    cart[2].quality1=coffobj.quality_1;
    cart[3].quality1=steelobj.quality_1;
    cart[4].quality1=alumobj.quality_1;
    cart[5].quality1=coppobj.quality_1;
    cart[6].quality1=wooobj.quality_1;
    cart[7].quality1=wheobj.quality_1;
    cart[8].quality1=bajobj.quality_1;
    cart[9].quality1=ragobj.quality_1;
    cart[0].quality2=cottobj.quality_2;
    cart[1].quality2=jutobj.quality_2;
    cart[2].quality2=coffobj.quality_2;
    cart[3].quality2=steelobj.quality_2;
    cart[4].quality2=alumobj.quality_2;
    cart[5].quality2=coppobj.quality_2;
    cart[6].quality2=wooobj.quality_2;
    cart[7].quality2=wheobj.quality_2;
    cart[8].quality2=bajobj.quality_2;
    cart[9].quality2=ragobj.quality_2;
    cart[0].quality3=cottobj.quality_3;
    cart[1].quality3=jutobj.quality_3;
    cart[2].quality3=coffobj.quality_3;
    cart[3].quality3=steelobj.quality_3;
    cart[4].quality3=alumobj.quality_3;
    cart[5].quality3=coppobj.quality_3;
    cart[6].quality3=wooobj.quality_3;
    cart[7].quality3=wheobj.quality_3;
    cart[8].quality3=bajobj.quality_3;
    cart[9].quality3=ragobj.quality_3;
    /*for(let i=0 ; i<cart.length ; i++)
    {
        if(cart[i].quantity > 0){
          console.log(cart[i].quantity+1);
            console.log(cart[i].itemName);}
    }*/
    //}
    /*function display() {
        /*return (
            <>
                <div>
                    {cart.map((item)=>(
                            <div key={item.itemName}>
                                <h5> Item Name: {item.itemName} </h5>
                                <h5> Quantity: {item.quantity} </h5>
                                <h5> Quality 1: {item.quality1} </h5>
                                <h5> Quality 2: {item.quality2} </h5>
                                <h5> Quality 3: {item.quality3} </h5>
                                -------------------------------------
                            </div>
                        )
                    )}
                </div>
            </>)*/
    /*useEffect(() => {
        cart.map((item)=>(
            item.quantity>0 ? (
                <div key={item.itemName}>
                    <h5> Item Name: {item.itemName} </h5>
                    <h5> Quantity: {item.quantity} </h5>
                    <h5> Quality 1: {item.quality1} </h5>
                    <h5> Quality 2: {item.quality2} </h5>
                    <h5> Quality 3: {item.quality3} </h5>
                    <h5><button onClick={ ()=>{console.log(item); item.quantity=0; item.quality1=0; item.quality2=0; item.quality3=0; display()}}>Delete</button></h5>
                    -------------------------------------
                </div>
            ) : ("") )
        )
    });*/

    function display(n)
    {
        if(n === "Cotton")
        {
            cart[0].quantity = 0;
            cart[0].quality1 = 0;
            cart[0].quality2 = 0;
            cart[0].quality3 = 0;
            console.log(n);
            return true;
        }
        else if(n === "Jute")
        {
            cart[1].quantity = 0;
            cart[1].quality1 = 0;
            cart[1].quality2 = 0;
            cart[1].quality3 = 0;
            console.log(n);
            return true;
        }
        else if(n === "Coffee")
        {
            cart[2].quantity = 0;
            cart[2].quality1 = 0;
            cart[2].quality2 = 0;
            cart[2].quality3 = 0;
            console.log(n);
            return true;
        }
        else if(n === "Steel")
        {
            cart[3].quantity = 0;
            cart[3].quality1 = 0;
            cart[3].quality2 = 0;
            cart[3].quality3 = 0;
            console.log(n);
            return true;
        }
        if(n === "Aluminium")
        {
            cart[4].quantity = 0;
            cart[4].quality1 = 0;
            cart[4].quality2 = 0;
            cart[4].quality3 = 0;
            console.log(n);
            return true;
        }
        if(n === "Copper")
        {
            cart[5].quantity = 0;
            cart[5].quality1 = 0;
            cart[5].quality2 = 0;
            cart[5].quality3 = 0;
            console.log(n);
            return true;
        }
        if(n === "Wood")
        {
            cart[6].quantity = 0;
            cart[6].quality1 = 0;
            cart[6].quality2 = 0;
            cart[6].quality3 = 0;
            console.log(n);
            return true;
        }
        if(n === "Wheat")
        {
            cart[7].quantity = 0;
            cart[7].quality1 = 0;
            cart[7].quality2 = 0;
            cart[7].quality3 = 0;
            console.log(n);
            return true;
        }
        if(n === "Bajra")
        {
            cart[8].quantity = 0;
            cart[8].quality1 = 0;
            cart[8].quality2 = 0;
            cart[8].quality3 = 0;
            console.log(n);
            return true;
        }
        if(n === "Ragi")
        {
            cart[9].quantity = 0;
            cart[9].quality1 = 0;
            cart[9].quality2 = 0;
            cart[9].quality3 = 0;
            console.log(n);
            return true;
        }
        /*cart.map((item)=>(
            item.quantity>0 ? (
                <div key={item.itemName}>
                    <h5> Item Name: {item.itemName} </h5>
                    <h5> Quantity: {item.quantity} </h5>
                    <h5> Quality 1: {item.quality1} </h5>
                    <h5> Quality 2: {item.quality2} </h5>
                    <h5> Quality 3: {item.quality3} </h5>
                    <h5><button onClick={ ()=>{console.log(item); display(item)}}>Delete</button></h5>
                    -------------------------------------
                </div>
            ) : ("") )
        )*/
        return false;
    }
    function update(it)
    {
        console.log(it);
        cart = cart.filter(display);
    }
    return (
        <><div>
            <center>
                <h1 id="cart">
                    Cart
                </h1>
            </center>
        </div>
            {/*for(i=0 ; i<cart.length ; i++)
        {
            if(cart[i].quantity > 0){
            s = s + "Item Name: " + cart[i].itemName + ", Quantity: " + cart[i].quantity + ", Quality 1: " + cart[i].quality1 + ", Quality 2: " + cart[i].quality2 + "Quality 3: " + cart[i].quality3;
            {s}
            }
            s = "";
        }*/}
            <div>
                {cart.map((item)=>(
                    item.quantity>0 ? (
                        <div key={item.itemName}>
                            <h5> Item Name: {item.itemName} </h5>
                            <h5> Quantity: {item.quantity} </h5>
                            <h5> Quality 1: {item.quality1} </h5>
                            <h5> Quality 2: {item.quality2} </h5>
                            <h5> Quality 3: {item.quality3} </h5>
                            {/*let obj = {
                            names: item.itemName,
                            quantity: item.quantity,
                            quality1: item.quality1,
                            quality2: item.quality2,
                            quality3: item.quality3
                        }*/}
                            <h5><button onClick={update(item)}>Delete</button></h5>
                            -------------------------------------
                        </div>
                    ) : ("") )
                )}
            </div>
            <button onClick={savedetail}>Confirm Cart</button>
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
export default Cart;