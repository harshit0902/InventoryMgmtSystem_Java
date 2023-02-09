import { useState } from "react";
import React from "react";
import Axios from "axios";
import Header from './customer_navbar'
import Footer from './footer'
import {Link} from "react-router-dom";
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
            console.log(response);
        });
    }

    const chooseQuality = (text) => {
        //console.log(itemname);
        if(text === "Cotton") {
            const cq1 = <div>
                <label>Enter Uniformity Index: </label>
                <input type="number" placeholder='Enter Value Here'
                       onChange={(event) => { setQ1(event.target.value) }}></input>
            </div>

            const cq2 = <div>
                <label>Enter Strength: </label>
                <input type="number" placeholder='Enter Value Here'
                       onChange={(event) => { setQ2(event.target.value) }}></input>
            </div>

            const cq3 = <div>
                <label>Enter Elongation: </label>
                <input type="number" placeholder='Enter Value Here'
                       onChange={(event) => { setQ3(event.target.value) }}></input>
            </div>

            setItem(<div>{cq1}{cq2}{cq3}</div>)
        }

        else if(text === "Jute") {
            const jq1 =  <div>
                    <label>Enter Root Content: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
            </div>

            const jq2 = <div>
                <label>Enter Fineness: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ2(event.target.value) }}></input>
            </div>

            const jq3 = <div>
                <label>Enter Bulk Density: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ3(event.target.value) }}></input>
                </div>
            setItem(<div>{jq1}{jq2}{jq3}</div>)
        }

        else if(text === "Coffee") {
                const cfq1 = <div>
                    <label>Enter Sweetness: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                const cfq2 = <div>
                     <label>Enter Moisture Content: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const cfq3 = <div>
                     <label>Enter Acidity: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{cfq1}{cfq2}{cfq3}</div>)
        }

        else if(text === "Steel") {
                const sq1 = <div>
                    <label>Enter Hardenability: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                const sq2 = <div>
                     <label>Enter Ductility: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                const sq3 = <div>
                     <label>Enter Compression: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{sq1}{sq2}{sq3}</div>)
        }

        else if(itemname === "Aluminium") {
                const aq1 = <div>
                    <label>Enter Thermal Conductivity: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

               const aq2 = <div>
                     <label>Enter Density: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

               const aq3 = <div>
                     <label>Enter Corrosion Resistance: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{aq1}{aq2}{aq3}</div>)
        }

        else if(itemname === "Copper") {
                const cpq1 = <div>
                    <label>Enter Electrical Conductivity: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                const cpq2 = <div>
                     <label>Enter Biofouling Resistance: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const cpq3 = <div>
                     <label>Enter Magnetizability: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{cpq1}{cpq2}{cpq3}</div>)
        }

        else if(itemname === "Wood") {
                const wq1 = <div>
                    <label>Enter Shear: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                 const wq2 = <div>
                     <label>Enter Cell Wall Thickness: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const wq3 = <div>
                     <label>Enter Coarseness: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{wq1}{wq2}{wq3}</div>)
        }

        else if(itemname === "Wheat") {
                const whq1 = <div>
                    <label>Enter Grain Hardness: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                 const whq2 = <div>
                     <label>Enter Protein Content: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const whq3 = <div>
                     <label>Enter Gluten Strength: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{whq1}{whq2}{whq3}</div>)
        }

        else if(itemname === "Bajra") {
                const bq1 = <div>
                    <label>Enter Moisture Content: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                 const bq2 = <div>
                     <label>Enter Damaged Grains: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const bq3 = <div>
                     <label>Enter Immature Grains: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ3(event.target.value) }}></input>
                 </div>
            setItem(<div>{bq1}{bq2}{bq3}</div>)
        }

        else if(itemname === "Ragi") {
                const rq1 = <div>
                    <label>Enter Fatty Acid Content: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div>

                 const rq2 = <div>
                     <label>Enter Crude Fibre Content: </label>
                     <input type="number" placeholder='Enter Value Here'
                            onChange={(event) => { setQ2(event.target.value) }}></input>
                 </div>

                 const rq3 = <div>
                     <label>Enter Crude Protein Content: </label>
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
            <Header />
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
                    <select id="itemName"  aria-label="Default select example"
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
            <div id='detailsnew'>
                <center>
                    {/* <Link id="linking" to='/login'>Sign Up</Link> */}
                    <button id='button-result' onClick={savedetail}><Link id="sign" to='/homepage2'>Place Order</Link></button>
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
        <Footer />
        </div>
    );
}

export default App1;