import { useState } from "react";

import React from "react";
import Axios from "axios";
// import Axios from "axios";
// import Display from "./display";

function App1() {
    const [itemname, setItemname] = useState("");
    const [qty, setQty] = useState("");
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [item,setItem] =useState(<p></p>)
    //const emailregex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
   /* const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");
    const [account, setAcc]= useState("");*/
    // const [itemdetails, setItemdetails] = useState([]);

    const savedetail = () => {
        Axios.post('http://localhost:9091/api/buy/special', {
            itemName: itemname,
            quantity: qty,
            /*quality1: q1,
            quality2: q2,
            quality3: q3,*/
        }).then((response) => {
            // setUserdetails(response.data);
            console.log(response)
            if (response.data == 'success') {
                window.location.href = "http://localhost:3000/login";
            }
        });
    }

    const chooseQuality = (text) => {
        //console.log(itemname);
        if(text === "Cotton") {
            const cq1 = <div>
                <label>Enter CQ1: </label>
                <input type="number" placeholder='Enter Value Here'
                       onChange={(event) => { setQ1(event.target.value) }}></input>
            </div>

            const cq2 = <div>
                <label>Enter CQ2: </label>
                <input type="number" placeholder='Enter Value Here'
                       onChange={(event) => { setQ2(event.target.value) }}></input>
            </div>

            const cq3 = <div>
                <label>Enter CQ3: </label>
                <input type="number" placeholder='Enter Value Here'
                       onChange={(event) => { setQ3(event.target.value) }}></input>
            </div>

            setItem(<div>{cq1}{cq2}{cq3}</div>)
        }

        else if(text === "Jute") {
            const jq1 =  <div>
                    <label>Enter JQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
            </div>

            const jq2 = <div>
                <label>Enter JQ2: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ2(event.target.value) }}></input>
            </div>

            const jq3 = <div>
                <label>Enter JQ3: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ3(event.target.value) }}></input>
                </div>
            setItem(<div>{jq1}{jq2}{jq3}</div>)
        }

        else if(text === "Coffee") {
                const cfq1 = <div>
                    <label>Enter CfQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                const cfq2 = <div>
                     <label>Enter CfQ2: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const cfq3 = <div>
                     <label>Enter CfQ3: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{cfq1}{cfq2}{cfq3}</div>)
        }

        else if(text === "Steel") {
                const sq1 = <div>
                    <label>Enter SQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                const sq2 = <div>
                     <label>Enter SQ2: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                const sq3 = <div>
                     <label>Enter SQ3: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{sq1}{sq2}{sq3}</div>)
        }

        else if(itemname === "Aluminium") {
                const aq1 = <div>
                    <label>Enter AQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

               const aq2 = <div>
                     <label>Enter AQ2: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

               const aq3 = <div>
                     <label>Enter AQ3: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{aq1}{aq2}{aq3}</div>)
        }

        else if(itemname === "Copper") {
                const cpq1 = <div>
                    <label>Enter CpQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                const cpq2 = <div>
                     <label>Enter CpQ2: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const cpq3 = <div>
                     <label>Enter CpQ3: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{cpq1}{cpq2}{cpq3}</div>)
        }

        else if(itemname === "Wood") {
                const wq1 = <div>
                    <label>Enter WQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                 const wq2 = <div>
                     <label>Enter WQ2: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const wq3 = <div>
                     <label>Enter WQ3: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{wq1}{wq2}{wq3}</div>)
        }

        else if(itemname === "Wheat") {
                const whq1 = <div>
                    <label>Enter WhQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                 const whq2 = <div>
                     <label>Enter WhQ2: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const whq3 = <div>
                     <label>Enter WhQ3: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{whq1}{whq2}{whq3}</div>)
        }

        else if(itemname === "Bajra") {
                const bq1 = <div>
                    <label>Enter BQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                 const bq2 = <div>
                     <label>Enter BQ2: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const bq3 = <div>
                     <label>Enter BQ3: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{bq1}{bq2}{bq3}</div>)
        }

        else if(itemname === "Ragi") {
                const rq1 = <div>
                    <label>Enter RQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                 const rq2 = <div>
                     <label>Enter RQ2: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const rq3 = <div>
                     <label>Enter RQ3: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{rq1}{rq2}{rq3}</div>)
        }
    }

    function fun1(text)
    {
        setItemname(text);
        chooseQuality(text);
    }

    return (
        <div id="Users">

            <div>
                <center>
                    <h1 id="title">
                        Special Request Form
                    </h1>
                </center>
            </div>
            <div id="details">
                <div>
                    <label>Select Item Name: </label>
                    <select id="itemName" className="form-select" aria-label="Default select example"
                            onClick={(event) => {
                                fun1(event.target.value)
                            }}>
                        <option value="Select">Select</option>
                        <option value="Cotton">Cotton</option>
                        <option value="Jute">Jute</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Steel">Steel</option>
                        <option value="Aluminium">Aluminium</option>
                        <option value="Copper">Copper</option>
                        <option value="Wood">Wood</option>
                        <option value="Wheat">Wheat</option>
                        <option value="Bajra">Bajra</option>
                        <option value="Ragi">Ragi</option>
                    </select>
                </div>
                <div>
                    <label>Enter Quantity: </label>
                    <input type="number" placeholder='Enter Quantity Here'
                           onChange={(event) => { setQty(event.target.value) }}></input>
                </div>
                {/* <div>
                    {chooseQuality}
                </div> */}
            </div>
            {item}
            <br></br>
            <div>
                <center>
                    {/* <Link id="linking" to='/login'>Sign Up</Link> */}
                    <button onClick={savedetail}>Place Order</button>
                </center>
                {/*{message}*/}
            </div>
            {/*userdetails.map((value, key) => {
                return <div>
                    <Display
                        Name={value.Name}
                        Email={value.Email}
                        Password={value.Password}
                        Conf_Password={value.Conf_Password}
                        Mob_No={value.Mobile_Number}
                        Address={value.Address}
                        Account={value.Account}/>
                </div>
            })*/}

        </div>
    );
}

export default App1;