import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import Header from './customer_navbar'
import Footer from './footer'

function Homepage2() {
    const navigate = useNavigate()
    return (


        <><Header />
            <h1 id="titlehead1">
                &nbsp;Manage your Inventory with us !
            </h1>


            <h2 id="titlehead2">
                Make your Stocks <br></br> And Management with Us
            </h2>
            <div id="detailsnew1">

            </div>

            <Footer /></>


    )

}
export default Homepage2;