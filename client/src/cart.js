
// import { useState } from "react";



let cart=[];
function App() { 

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

//     const parsedobj1 =JSON.parse(ctr);
//     console.log(parsedobj1);
//     console.log(parsedobj1.q_1,parsedobj1.q_2,parsedobj1.itemNAme[0],parsedobj1.itemNAme[1]);
// }
// let [cart,setCart]=useState([]);
    function val() {
        let i = 'steel';
        // setCart([...cart, {itemName:i, qty:0, q1:0, q2:0, q3:0}]); 
        cart.push({itemName:i, qty:0, q1:0, q2:0, q3:0});
        // console.log(cart);
        cart[0].itemName='Wheat';
        console.log(cart);
    }


return (
    <><div>
    <center>
      <h1 id="cart">
        Cart
      </h1>
    </center>
  </div><div id="details">

      <button onClick={val}>check</button>

      <button onClick={val}>Hello</button>
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
       }

       {/* cart[0].itemName = "Steel"; */}

      {/* <button>Special Request?</button> */}

    </div></>

)
}

export default App;



