import { useState } from "react";
testing 1 2 3

let cart=[];
//import { useState } from "react";

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
    function val() {
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
    }

    function multiple() {
        val();
        val();
        val();
        val();
        val();
        val();
        val();
        val();
        val();
        val();
        cart[0].itemName='A';
        cart[1].itemName='B';
        cart[2].itemName='C';
        cart[3].itemName='D';
        cart[4].itemName='E';
        cart[5].itemName='F';
        cart[6].itemName='G';
        cart[7].itemName='H';
        cart[8].itemName='I';
        cart[9].itemName='J';
        cart[0].qty=5;
        cart[2].qty=15;
        cart[4].qty=25;
        cart[6].qty=35;
        cart[8].qty=45;
    }

    function display() {
        for(let i=0 ; i<cart.length ; i++)
        {
            if(cart[i].qty > 0)
                console.log(cart[i].itemName);
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
        {/* <button onClick={val}>Hello</button> */}

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

    </>

)
}

export default App;



