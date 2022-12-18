
import React, {useEffect, useState} from "react";
import { NavLink, Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import Axios from "axios";
import './index.css'

function Navbar() {

    return (
        <nav id="navbar1">
            <div class="navelement-img">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/012/893/214/small/eps10-white-inventory-abstract-line-icon-isolated-on-black-background-stack-of-boxes-outline-symbols-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg" alt="Logo"></img>
            </div>
            <div class="navelement">
                <NavLink to='/homepage1'><div class="navelement">HOME</div></NavLink>
            </div>
            <div class="navelement">
                <NavLink to='/about'><div class="navelement">ABOUT US</div></NavLink>
            </div>
            <div id='apple'>
                <Link to='/login'><BsFillPersonFill  size= "40px" color="white"/></Link>
            </div>
        </nav>
    )
}

export default Navbar;