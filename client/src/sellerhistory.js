import {useEffect, useState} from "react";
import Axios from "axios";

function App() {

    const [selldetails, setSelldetails] = useState([]);

    useEffect(() => {
    Axios.post('http://localhost:9091/api/sell/confirm', {
        sellerEmail: "abcd@gmail.com"
    }).then((response) => {
        setSelldetails(response.data);
        console.log(response)
        if (response.data == 'success') {
            window.location.href = "http://localhost:3000/login";
        }
    });
    }, []);

    return (
        <><div>
            <center>
                <h1 id="buyconfirmation">
                    Seller History
                </h1>
            </center>
        </div>
            <div id="details">
                {selldetails.map((val1, key)=>{
                    return <>
                        <div>
                            Bill Number : {val1.billNo}
                            <br></br>
                            Total Amount : {val1.totalAmt}
                        </div>
                    </>
                })}
            </div>
            {/*<div>
                <button onClick={() => {
                    Check()
                } }>Check</button>
                <button onClick={() => {
                    localstorage3()
                }}>Add to cart</button>
                <button>Special Request?</button>

            </div>*/}</>

    )
}
export default App;
