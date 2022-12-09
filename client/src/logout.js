import React, {useEffect, useState} from "react";
import { NavLink, Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import Axios from "axios";
import './index.css'
import Header from './navbar'
import Footer from './footer'

function Navbar() {
    return (
        <><Header />
        <div id="Users">
            <div>
                <center>
                    <h1 id="title">
                        !! Thank you for visiting us !!
                    </h1>
                </center>
            </div>
        </div><Footer /></>
    )
}

export default Navbar;