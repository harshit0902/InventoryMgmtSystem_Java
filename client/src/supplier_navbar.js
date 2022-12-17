
import React, {useEffect, useState} from "react";
import { NavLink, Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import Axios from "axios";
import './index.css'

function SupplierNavbar() {

    return (
        <nav id="navbar2">
            <div class="navelement-img">
                <img src="logonew.jpg" alt="Logo"></img>
            </div>
            {/*<div class="navelement">
                <NavLink to='/profile'><div class="navelement">PROFILE</div></NavLink>
            </div>*/}
            <div class="navelement">
                <NavLink to='/homepage3'><div class="navelement">HOME</div></NavLink>
            </div>
            <div class="navelement">
                <NavLink to='/about2'><div class="navelement">ABOUT US</div></NavLink>
            </div>
            <div className="navelement">
                <NavLink to='/sellerform'><div className="navelement">SELL ITEMS</div></NavLink>
            </div>
            <div className="navelement">
                <NavLink to='/sellerhistory'><div className="navelement">HISTORY</div></NavLink>
            </div>
            {/*<div class="navelement">
                <NavLink to='/reportform'><div class="navelement">REPORT</div></NavLink>
            </div>*/}
            <div>
                <Link to='/logout'><BsFillPersonFill size="2em" color="white"/></Link>
            </div>
        </nav>
    )
}

export default SupplierNavbar;