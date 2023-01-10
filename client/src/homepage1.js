import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import Header from './navbar'
import Footer from './footer'

function Homepage1() {
    const navigate = useNavigate()
    return (


        <><Header />
            <h1 id="titlehead1">
                &nbsp;Manage your Inventory with us !
            </h1>


            <h2 id="titlehead2">
                High Turnover and High <br></br> Profitability of your Stocks
            </h2>

            <div id="detailsnew1">
                <div id="buttons">
                    <button className='button-methish' onClick><Link id="sign" to='/signup'>Sign Up</Link></button>
                </div>
                <div id="buttons">
                    <button className='button-methish' onClick><Link id="sign" to='/login'>Login</Link></button>
                </div>
            </div>

            <Footer /></>


    )

}
export default Homepage1;