import { useState } from "react";
import React from "react";
import Axios from "axios";
import Display from "./display";
import Header from './navbar'
import Footer from './footer'

function App() {
    const emailregex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");
    const [mobno, setMobno] = useState("");
    const [address, setAddress] = useState("");
    const [userdetails, setUserdetails] = useState([]);
    const [message, setMessage] = useState("");
    const [account, setAcc]= useState("");
    const savedetail = () => {
        if (emailregex.test(email) && mobno.length == 10 &&  password===confpassword) {
            Axios.post('http://localhost:9091/api/credentials/signup', {
                username: name,
                email: email,
                password: password,
                mobNo: mobno,
                address: address,
                typeOfAcc: account
            }).then((response) => {
                // setUserdetails(response.data);
                console.log(response)
                if (response.data == 'success') {
                    window.location.href = "http://localhost:3000/login";
                }
            });
        } else {
            setMessage('Signup not correct');
        }
    }
    

    return (
        <div id="Users">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        Welcome to the Signup Page
                    </h1>
                </center>
            </div>
            <div id="details">
                <div>
                    <label>Enter Name: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setName(event.target.value) }}></input>
                </div>
                <div>
                    <label>Enter Account type: </label>
                    <label for="buy">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Buyer </label>
                    <input type="radio" id="buy" name="account" value="Buyer" onChange={(event) => { setAcc(event.target.value) }}></input>
                    <label for="sell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Seller</label>
                    <input type="radio" id="sell" name="account" value="Seller" onChange={(event) => { setAcc(event.target.value) }}></input>
                </div>
                <div>
                    <label>Enter Email id: </label>
                    <input type="email" placeholder='Enter Text Here'
                        onChange={(event) => { setEmail(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Password: </label>
                    <input type="password" placeholder='Enter Text Here'
                        onChange={(event) => { setPassword(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" placeholder='Enter Text Here'
                        onChange={(event) => { setConfpassword(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Mobile Number: </label>
                    <input type="text" placeholder='Enter Text Here'
                        onChange={(event) => { setMobno(event.target.value) }}></input>
                    <br></br>
                </div>
                <div>
                    <label>Enter Address: </label>
                    <input type="textarea" placeholder='Enter Text Here'
                        onChange={(event) => { setAddress(event.target.value) }}></input>
                    <br></br>
                </div>
            </div>
            
            <div id='detailsnew'>
                <center>
                    {/* <Link id="linking" to='/login'>Sign Up</Link> */}
                <button className="button-methish" onClick={savedetail}>Signup</button>
                </center>
                
            </div>
           
            <Footer />
        </div>
    );
}

export default App;