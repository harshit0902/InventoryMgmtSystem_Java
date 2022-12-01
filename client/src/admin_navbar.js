
import React, {useEffect, useState} from "react";
import { NavLink, Link } from 'react-router-dom'
import Axios from "axios";
import './index.css'

function AdminNavbar() {

    return (
        <nav id="adminnav">
            <div class="navelement-img">
                {/* <img src="logonew.jpg" ></img> */}
            </div>
            <div class="navelement">
                <NavLink to='/admin'><div class="navelement">HOME</div></NavLink>
            </div>
            {/* <div class="navelement">
                <NavLink to='/about2'>About</NavLink>
            </div> */}
            <div class="dropdown">
                <button class="dropbtn">
                    ITEM
                </button>
                <div class="dropdown-content">
                    <Link to='/add_item'>Add Item</Link>
                    <Link to='/edit_item'>Modify Item</Link>
                    <Link to='/delete_item'>Delete Item</Link>
                    <Link to='/view_item'>View Items</Link>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                    CUSTOMERS
                </button>
                <div class="dropdown-content">
                    <Link to='/allcustomer'>View Customers</Link>
                    {/* <Link to='/cargo_status'>View your Cargo Status</Link> */}
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">
                    SUPPLIERS
                </button>
                <div class="dropdown-content">
                    <Link to='/airline_routedetails'>View Suppliers</Link>
                    {/* <Link to='/cargo_status'>View your Cargo Status</Link> */}
                </div>
            </div>
            <div>
                <Link to='/logout'><img id="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKYamkRB_qMHdd_HvhrxBlHhExgcAW6Mquw&usqp=CAU" alt="profile" /></Link>
            </div>
        </nav>
    )
}

export default AdminNavbar;