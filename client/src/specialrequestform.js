import { useState } from "react";
// import Axios from "axios";
// import Display from "./display";

function App() {
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

    /*const cottonQuality1 = () => {

    }*/

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
            return (
                <div>
                    <label>Enter SQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div> );

            // return (
            //     <div>
            //         <label>Enter SQ2: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ2(event.target.value) }}></input>
            //     </div> );

            // return (
            //     <div>
            //         <label>Enter SQ3: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ3(event.target.value) }}></input>
            //     </div> );
        }

        else if(itemname === "Aluminium") {
            return (
                <div>
                    <label>Enter AQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div> );

            // return (
            //     <div>
            //         <label>Enter AQ2: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ2(event.target.value) }}></input>
            //     </div> );

            // return (
            //     <div>
            //         <label>Enter AQ3: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ3(event.target.value) }}></input>
            //     </div> );
        }

        else if(itemname === "Copper") {
            return (
                <div>
                    <label>Enter CpQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div> );

            // return (
            //     <div>
            //         <label>Enter CpQ2: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ2(event.target.value) }}></input>
            //     </div> );

            // return (
            //     <div>
            //         <label>Enter CpQ3: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ3(event.target.value) }}></input>
            //     </div> );
        }

        else if(itemname === "Wood") {
            return (
                <div>
                    <label>Enter WQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div> );

            // return (
            //     <div>
            //         <label>Enter WQ2: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ2(event.target.value) }}></input>
            //     </div> );

            // return (
            //     <div>
            //         <label>Enter WQ3: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ3(event.target.value) }}></input>
            //     </div> );
        }

        else if(itemname === "Wheat") {
            return (
                <div>
                    <label>Enter WhQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div> );

            // return (
            //     <div>
            //         <label>Enter WhQ2: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ2(event.target.value) }}></input>
            //     </div> );

            // return (
            //     <div>
            //         <label>Enter WhQ3: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ3(event.target.value) }}></input>
            //     </div> );
        }

        else if(itemname === "Bajra") {
            return (
                <div>
                    <label>Enter BQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div> );

            // return (
            //     <div>
            //         <label>Enter BQ2: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ2(event.target.value) }}></input>
            //     </div> );

            // return (
            //     <div>
            //         <label>Enter BQ3: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ3(event.target.value) }}></input>
            //     </div> );
        }

        else if(itemname === "Ragi") {
            return (
                <div>
                    <label>Enter RQ1: </label>
                    <input type="number" placeholder='Enter Value Here'
                           onChange={(event) => { setQ1(event.target.value) }}></input>
                </div> );

            // return (
            //     <div>
            //         <label>Enter RQ2: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ2(event.target.value) }}></input>
            //     </div> );

            // return (
            //     <div>
            //         <label>Enter RQ3: </label>
            //         <input type="number" placeholder='Enter Value Here'
            //                onChange={(event) => { setQ3(event.target.value) }}></input>
            //     </div> );
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
                    <button>Place Order</button>
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

export default App;