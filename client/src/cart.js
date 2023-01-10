import React, { useEffect, useState } from "react";
import Axios from "axios";
import Header from './customer_navbar'
import Footer from './footer'
import { Link } from "react-router-dom";
let email = localStorage.getItem("email");

let cart = [];
let send = [];

function Cart() {
    let [car, setCart] = useState([]);
    let cott = localStorage.getItem("cottData");
    let cottobj = JSON.parse(cott);
    let jut = localStorage.getItem("jutData");
    let jutobj = JSON.parse(jut);
    let coff = localStorage.getItem("coffData");
    let coffobj = JSON.parse(coff);
    let steel = localStorage.getItem("steelData");
    let steelobj = JSON.parse(steel);
    let alum = localStorage.getItem("alumData");
    let alumobj = JSON.parse(alum);
    let copp = localStorage.getItem("coppData");
    let coppobj = JSON.parse(copp);
    let woo = localStorage.getItem("wooData");
    let wooobj = JSON.parse(woo);
    let whe = localStorage.getItem("wheData");
    let wheobj = JSON.parse(whe);
    let baj = localStorage.getItem("bajData");
    let bajobj = JSON.parse(baj);
    let rag = localStorage.getItem("ragData");
    let ragobj = JSON.parse(rag);

    const savedetail = () => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].quantity > 0) {
                send.push(cart[i]);
            }
        }
        console.log(send);
        localStorage.setItem("cart", send);
        Axios.post('http://localhost:9091/api/buy/normal', {
            email: email,
            it: send
        }).then((response) => {
            console.log(response)
            if (response.data == 'success') {
                window.location.href = "http://localhost:3000/homepage2";
            }
            alert("Payment Successful !!");
        });
    }
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
    cart.push({ id: 0, itemName: i1, quantity: 0, quality1: 0, quality2: 0, quality3: 0 });
    cart.push({ id: 1, itemName: i2, quantity: 0, quality1: 0, quality2: 0, quality3: 0 });
    cart.push({ id: 2, itemName: i3, quantity: 0, quality1: 0, quality2: 0, quality3: 0 });
    cart.push({ id: 3, itemName: i4, quantity: 0, quality1: 0, quality2: 0, quality3: 0 });
    cart.push({ id: 4, itemName: i5, quantity: 0, quality1: 0, quality2: 0, quality3: 0 });
    cart.push({ id: 5, itemName: i6, quantity: 0, quality1: 0, quality2: 0, quality3: 0 });
    cart.push({ id: 6, itemName: i7, quantity: 0, quality1: 0, quality2: 0, quality3: 0 });
    cart.push({ id: 7, itemName: i8, quantity: 0, quality1: 0, quality2: 0, quality3: 0 });
    cart.push({ id: 8, itemName: i9, quantity: 0, quality1: 0, quality2: 0, quality3: 0 });
    cart.push({ id: 9, itemName: i10, quantity: 0, quality1: 0, quality2: 0, quality3: 0 });
    cart[0].itemName = 'Cotton';
    cart[1].itemName = 'Jute';
    cart[2].itemName = 'Coffee';
    cart[3].itemName = 'Steel';
    cart[4].itemName = 'Aluminium';
    cart[5].itemName = 'Copper';
    cart[6].itemName = 'Wood';
    cart[7].itemName = 'Wheat';
    cart[8].itemName = 'Bajra';
    cart[9].itemName = 'Ragi';
    cart[0].quantity = cottobj.quantity;
    cart[1].quantity = jutobj.quantity;
    cart[2].quantity = coffobj.quantity;
    cart[3].quantity = steelobj.quantity;
    cart[4].quantity = alumobj.quantity;
    cart[5].quantity = coppobj.quantity;
    cart[6].quantity = wooobj.quantity;
    cart[7].quantity = wheobj.quantity;
    cart[8].quantity = bajobj.quantity;
    cart[9].quantity = ragobj.quantity;
    cart[0].quality1 = cottobj.quality_1;
    cart[1].quality1 = jutobj.quality_1;
    cart[2].quality1 = coffobj.quality_1;
    cart[3].quality1 = steelobj.quality_1;
    cart[4].quality1 = alumobj.quality_1;
    cart[5].quality1 = coppobj.quality_1;
    cart[6].quality1 = wooobj.quality_1;
    cart[7].quality1 = wheobj.quality_1;
    cart[8].quality1 = bajobj.quality_1;
    cart[9].quality1 = ragobj.quality_1;
    cart[0].quality2 = cottobj.quality_2;
    cart[1].quality2 = jutobj.quality_2;
    cart[2].quality2 = coffobj.quality_2;
    cart[3].quality2 = steelobj.quality_2;
    cart[4].quality2 = alumobj.quality_2;
    cart[5].quality2 = coppobj.quality_2;
    cart[6].quality2 = wooobj.quality_2;
    cart[7].quality2 = wheobj.quality_2;
    cart[8].quality2 = bajobj.quality_2;
    cart[9].quality2 = ragobj.quality_2;
    cart[0].quality3 = cottobj.quality_3;
    cart[1].quality3 = jutobj.quality_3;
    cart[2].quality3 = coffobj.quality_3;
    cart[3].quality3 = steelobj.quality_3;
    cart[4].quality3 = alumobj.quality_3;
    cart[5].quality3 = coppobj.quality_3;
    cart[6].quality3 = wooobj.quality_3;
    cart[7].quality3 = wheobj.quality_3;
    cart[8].quality3 = bajobj.quality_3;
    cart[9].quality3 = ragobj.quality_3;

    useEffect(() => {
        setCart(cart);
    }, []);

    const Data = {
        quantity: 0,
        quality_1: 0,
        quality_2: 0,
        quality_3: 0
    };
    const obj = JSON.stringify(Data);

    function Del(val) {
        let temp1 = car.map(obje => {
            if (obje.id === val) {
                return { ...obje, quantity: 0, quality1: 0, quality2: 0, quality3: 0 };
            }
            return obje;
        });
        setCart(temp1);
        console.log(temp1);
        console.log(val);

        if (val == 0)
            localStorage.setItem("cottData", obj);

        if (val == 1)
            localStorage.setItem("jutData", obj);

        if (val == 2)
            localStorage.setItem("coffData", obj);

        if (val == 3)
            localStorage.setItem("steelData", obj);

        if (val == 4)
            localStorage.setItem("alumData", obj);

        if (val == 5)
            localStorage.setItem("coppData", obj);

        if (val == 6)
            localStorage.setItem("wooData", obj);

        if (val == 7)
            localStorage.setItem("wheData", obj);

        if (val == 8)
            localStorage.setItem("bajData", obj);

        if (val == 9)
            localStorage.setItem("ragData", obj);
    }

    return (
        <><Header /><div>
            <center>
                <h1 id="cart">
                    Cart
                </h1>
            </center>
            {/* <h5><button onClick={()=>{setCart(cart)}}>Display</button></h5> */}
        </div>
            <div>
                {car.map((item, val) => (
                    val + 1,
                    item.quantity > 0 ? (
                        <div id='detailscart' key={item.itemName}>
                            <h5> Item Name: {item.itemName} </h5>
                            <h5> Quantity: {item.quantity} </h5>
                            <h5> Quality 1: {item.quality1} </h5>
                            <h5> Quality 2: {item.quality2} </h5>
                            <h5> Quality 3: {item.quality3} </h5>
                            <h5><button onClick={() => { Del(val) }}>Delete</button></h5>
                            -------------------------------------
                        </div>
                    ) : (""))
                )}
            </div>
            <div id="detailsnew2">
                <button id='button-result' onClick={savedetail}><Link id="sign" to='/homepage2'>Confirm Cart & Make Payment</Link></button>
            </div>
            <Footer /></>
    )
}
export default Cart;