import { useState } from "react";




function App() { 
    const [cart,setCart]=useState([]);
    function val() {
        let i = 'steel';
        setCart([...cart, {itemName:i, qty:0, q1:0, q2:0, q3:0}]); 
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
      <div>
        {/* setCart([...cart, {itemName:"abcd" , qty:0, q1:0, q2:0, q3:0}]);   */}
      </div>
      <button onClick={val}>Hello</button>

       {/* cart[0].itemName = "Steel"; */}

      {/* <button>Special Request?</button> */}

    </div></>

)
}
export default App;