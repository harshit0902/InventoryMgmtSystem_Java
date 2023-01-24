
import React, {useEffect, useState} from "react";
import { NavLink, Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import Axios from "axios";
import './index.css'

function CustomerNavbar() {

    return (
        <nav id="navbar2">
            <div class="navelement-img">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/012/893/214/small/eps10-white-inventory-abstract-line-icon-isolated-on-black-background-stack-of-boxes-outline-symbols-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-and-mobile-application-vector.jpg" alt="Logo"></img>
            </div>
            {/*<div class="navelement">
                <NavLink to='/profile'><div class="navelement">PROFILE</div></NavLink>
            </div>*/}
            <div class="navelement">
                <NavLink to='/homepage2'><div class="navelement">HOME</div></NavLink>
            </div>
            <div class="navelement">
                <NavLink to='/about1'><div class="navelement">ABOUT US</div></NavLink>
            </div>
            <div className="dropdown">
                <button className="dropbtn">BUY ITEMS</button>
                <div className="dropdown-content">
                    <Link to='/itemlistnew'>Normal Order</Link>
                    <Link to='/specialrequestform'>Special Order</Link>
                </div>
            </div>
            <div className="navelement">
                <NavLink to='/buyerhistory'><div className="navelement">HISTORY</div></NavLink>
            </div>
            {/*<div class="navelement">
                <NavLink to='/reportform'><div class="navelement">REPORT</div></NavLink>
            </div>*/}
            <div id='apple'>
                <Link to='/logout'><BsFillPersonFill size="2em" color="black"/></Link>
            </div>
        </nav>
    )
}

export default CustomerNavbar;