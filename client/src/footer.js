import React from "react";
import './index.css';
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
function Footer() {
    return (
        <div className='footer' id='footer-bottom'>
            {/* <div className='footer'> */}
            <div id="image">
                <BsTwitter padding="1em" size="2em" color="white" />
                &nbsp;
                &nbsp;
                <BsFacebook padding="1em" size="2em" color="white" />
                &nbsp;
                &nbsp;
                <BsInstagram padding="1em" size="2em" color="white" />
                &nbsp;
                &nbsp;
                <BsPinterest padding="1em" size="2em" color="white" />
                &nbsp;
                &nbsp;
                <BsYoutube padding="1em" size="2em" color="white" />
            </div>
            <div id="right-footer">@2022 INVENTO PVT. LTD.<br></br>168, Lloyds Road, Gopalapuram,<br></br>Chennai, Tamil Nadu, 600086</div>
            <div id="right-footer"><u>CONTACT US:</u><br></br>Mobile No.: 9435412671<br></br>Email: inventopvtltd@gmail.com</div>
            {/* </div> */}
        </div>
    );
}

export default Footer;