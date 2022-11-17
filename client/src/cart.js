import { useState } from "react";
import Axios from "axios";

let cart=[];
let send=[];
//import { useState } from "react";

function App() {

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

    /*const [qty, setqty] = useState(0);
    const [quality1, setquality1] = useState(0);
    const [quality2, setquality2] = useState(0);
    const [quality3, setquality3] = useState(0);
    let q1=parseInt(quality1);
    let q2=parseInt(quality2);
    let q3=parseInt(quality3);
    let qty1=parseInt(qty);*/
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
//     // setCart([...cart, {itemName:i, qty:0, q1:0, q2:0, q3:0}]); 
//     const cart1 = {
//      itemNAme : "steel",
//       q_1 : parsedobj.quality_1 ,
//      q_2 : parsedobj.quality_2 ,
              
//           itemNAme : "Cotton"


//     } 
//     // console.log(cart);
//     // cart[0].itemName = 'Steel';
//     // cart[0].qty = parsedobj.quantity;
//     // console.log(cart1[0].itemName);
//     // console.log(cart1[0].qty);
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
    // setCart([...cart, {itemName:i, qty:0, q1:0, q2:0, q3:0}]); 
    const cart1 = {
     itemNAme : "steel",
      q_1 : parsedobj.quality_1 ,
     q_2 : parsedobj.quality_2 ,
              
          itemNAme : "Cotton"


    }*/ 
    // console.log(cart);
    // cart[0].itemName = 'Steel';
    // cart[0].qty = parsedobj.quantity;
    // console.log(cart1[0].itemName);
    // console.log(cart1[0].qty);
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
        // setCart([...cart, {itemName:i, qty:0, q1:0, q2:0, q3:0}]); 
        cart.push({itemName:i, qty:0, q1:0, q2:0, q3:0});
        // console.log(cart);
        cart[0].itemName='Wheat';
        console.log(cart);
        /*const ctr= localStorage.getItem("bajData");
        const parsedobj1 =JSON.parse(ctr);
        cart[0].itemName = 'baj';
        cart[0].qty = parsedobj1.quantity;
        cart[0].q1 = parsedobj1.quality_1;
        cart[0].q2 = parsedobj1.quality_2;
        cart[0].q3 = parsedobj1.quality_3;
        console.log(cart);*/
    //}

    const savedetail = () => {
        for(let i=0 ; i<cart.length ; i++)
        {
            if(cart[i].qty > 0){
                send.push(cart[i]);
            }
        }

        const pass = {"it":send}
        console.log(send);
        console.log(pass);
        Axios.post('http://localhost:9090/api/buy/normal', {
            it: send
        }).then((response) => {
            // setUserdetails(response.data);
            console.log(response)
            if (response.data == 'success') {
                window.location.href = "http://localhost:3000/login";
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
        cart.push({itemName:i1, qty:0, q1:0, q2:0, q3:0});
        cart.push({itemName:i2, qty:0, q1:0, q2:0, q3:0});
        cart.push({itemName:i3, qty:0, q1:0, q2:0, q3:0});
        cart.push({itemName:i4, qty:0, q1:0, q2:0, q3:0});
        cart.push({itemName:i5, qty:0, q1:0, q2:0, q3:0});
        cart.push({itemName:i6, qty:0, q1:0, q2:0, q3:0});
        cart.push({itemName:i7, qty:0, q1:0, q2:0, q3:0});
        cart.push({itemName:i8, qty:0, q1:0, q2:0, q3:0});
        cart.push({itemName:i9, qty:0, q1:0, q2:0, q3:0});
        cart.push({itemName:i10, qty:0, q1:0, q2:0, q3:0});
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
        cart[0].qty=cottobj.quantity;
        cart[1].qty=jutobj.quantity;
        cart[2].qty=coffobj.quantity;
        cart[3].qty=steelobj.quantity;
        cart[4].qty=alumobj.quantity;
        cart[5].qty=coppobj.quantity;
        cart[6].qty=wooobj.quantity;
        cart[7].qty=wheobj.quantity;
        cart[8].qty=bajobj.quantity;
        cart[9].qty=ragobj.quantity;
        cart[0].q1=cottobj.quality_1;
        cart[1].q1=jutobj.quality_1;
        cart[2].q1=coffobj.quality_1;
        cart[3].q1=steelobj.quality_1;
        cart[4].q1=alumobj.quality_1;
        cart[5].q1=coppobj.quality_1;
        cart[6].q1=wooobj.quality_1;
        cart[7].q1=wheobj.quality_1;
        cart[8].q1=bajobj.quality_1;
        cart[9].q1=ragobj.quality_1;
        cart[0].q2=cottobj.quality_2;
        cart[1].q2=jutobj.quality_2;
        cart[2].q2=coffobj.quality_2;
        cart[3].q2=steelobj.quality_2;
        cart[4].q2=alumobj.quality_2;
        cart[5].q2=coppobj.quality_2;
        cart[6].q2=wooobj.quality_2;
        cart[7].q2=wheobj.quality_2;
        cart[8].q2=bajobj.quality_2;
        cart[9].q2=ragobj.quality_2;
        cart[0].q3=cottobj.quality_3;
        cart[1].q3=jutobj.quality_3;
        cart[2].q3=coffobj.quality_3;
        cart[3].q3=steelobj.quality_3;
        cart[4].q3=alumobj.quality_3;
        cart[5].q3=coppobj.quality_3;
        cart[6].q3=wooobj.quality_3;
        cart[7].q3=wheobj.quality_3;
        cart[8].q3=bajobj.quality_3;
        cart[9].q3=ragobj.quality_3;
        /*for(let i=0 ; i<cart.length ; i++)
        {
            if(cart[i].qty > 0){
              console.log(cart[i].qty+1);
                console.log(cart[i].itemName);}
        }*/
    }

    function display() {
        for(let i=0 ; i<cart.length ; i++)
        {
            if(cart[i].qty > 0){
              console.log(cart[i].qty+1);
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
              {val.q1}
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



