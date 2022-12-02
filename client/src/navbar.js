
import React, {useEffect, useState} from "react";
import { NavLink, Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import Axios from "axios";
import './index.css'

function Navbar() {

    return (
        <nav id="navbar1">
            <div class="navelement-img">
                <img src="logonew.jpg" alt="Logo"></img>
            </div>
            <div class="navelement">
                <NavLink to='/homepage1'><div class="navelement">HOME</div></NavLink>
            </div>
            <div class="navelement">
                <NavLink to='/about'><div class="navelement">ABOUT US</div></NavLink>
            </div>
            <div>
                <Link to='/login'><BsFillPersonFill size="2em" color="white"/></Link>
            </div>
        </nav>
    )
}

export default Navbar;