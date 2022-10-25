import { useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Axios from "axios";

import Display from "./display";


function App() {
    const [email, setEmail] = useState("");
    const [capcthaEntered, setcapcthaEntered] = useState("");
    const [password, setPassword] = useState("");
    const [userdetails, setUserdetails] = useState([]);
    const [capctha, setCaptcha] = useState(Math.random().toString(36).substring(2, 8));
    let obj;
    const changecaptcha = () => {
        setCaptcha("");
        setCaptcha(Math.random().toString(36).substring(2, 8))
    }
    const savedetail = () => {
        Axios.get('http://localhost:9090/api/credentials/login', {
            email: email,
            password: password
        }).then((response) => {
            // setUserdetails(response.data);
            console.log(response.data)
            if (response.data.length === 1 && capcthaEntered === capctha) {
                obj = Object.values(response.data);
                localStorage.setItem("email", email);
                localStorage.setItem("name", obj[0].name);
                localStorage.setItem("uid", obj[0].uid);

                if (obj[0].type === 'admin') {
                    window.location.href = "http://localhost:3000/admin_homepage"
                } else {
                    window.location.href = "http://localhost:3000/homepage2"
                }

            } else if (response.data === 'invalid') {
                console.log("Invalid Email/Password")
                localStorage.setItem("email", "");
                localStorage.setItem("name", "");
            } else {
                console.log("error")
                localStorage.setItem("email", "");
                localStorage.setItem("name", "");
            }
        });
    }

    return (
        <>
            <div id="Users">
                <div>
                    <center>
                        <h1 id="title">
                            Welcome to the Login Page
                        </h1>
                    </center>
                </div>
                <div id="details">
                    <div>
                        <label>Enter Email id: </label>
                        <input type="email" placeholder='Enter Text Here'
                            onChange={(event) => { setEmail(event.target.value) }}></input>
                    </div>
                    <div>
                        <label>Enter Password: </label>
                        <input type="password" placeholder='Enter Text Here'
                            onChange={(event) => { setPassword(event.target.value) }}></input>
                        <br></br>
                    </div>
                    <center><div id="captcha-string">{capctha}</div>
                        <br></br>
                        <button onClick={changecaptcha}>Change Captcha</button></center>
                    <br></br>
                    <div>
                        <label>Enter Captcha : </label>
                        <input type="text"
                            onChange={(event) => { setcapcthaEntered(event.target.value) }}></input>
                    </div>
                    <br></br>
                    <div>
                    </div>

                </div>
                <br></br>
                <div>
                    <center>
                        <button onClick={savedetail}>Login</button>
                    </center>
                </div>
                <div>
                  {/*  <center>
                        <h3>Don't have an account</h3>
                        <h4><Link to='/signup'>Sign Up !!</Link></h4>
                        <br></br>
                    </center>
    */}
                </div>
                {/*userdetails.map((value, key) => {
                    return <div>
                        <Display
                            Email={value.Email}
                            Password={value.Password} />
                    </div>
                })*/}
                {/* <table border='10px'>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    {userdetails.map((value, key) => {
                        return <>
                        <tr>
                            <td>{value.email}</td>
                            <td>{value.password}</td>
                        </tr>
                        </>
                    })}
                    </table> */}
            </div>
        </>

    );
}

export default App;