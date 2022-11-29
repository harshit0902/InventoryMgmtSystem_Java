
import {useEffect, useState} from "react";
import Axios from "axios";

function App() {

    const [buydetails, setBuydetails] = useState([]);

    useEffect(() => {
    Axios.post('http://localhost:9091/api/buy/confirm', {
        custEmail: "abcd@gmail.com"
    }).then((response) => {
        setBuydetails(response.data);
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
                    Buyer History
                </h1>
            </center>
        </div>
            <div id="details">
                {buydetails.map((val, key)=>{
                    return <>
                        <div>
                            Bill Number : {val.billNo}
                            <br></br>
                            Total Amount : {val.totalAmt}
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