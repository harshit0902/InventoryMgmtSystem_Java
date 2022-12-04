
import React, {useEffect, useState} from "react";
import { NavLink, Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import Axios from "axios";
import './index.css'
import Header from './navbar'

function Navbar() {

    return (
        <div id="Users">
            <Header />
            <div>
                <center>
                    <h1 id="title">
                        !! Thank you for visiting us !!
                    </h1>
                </center>
            </div>
        </div>
    )
}

export default Navbar;