
import React, {useEffect, useState} from "react";
import { NavLink, Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
import Axios from "axios";
import Header from './navbar'
import Footer from './footer'
import './index.css'

function Navbar() {

    return (
        <div id="AboutUs">
            <Header />
            <div>
                <center>
                    <h2 id="titlehead2">
                        INVENTO
                    </h2>
                </center>
            </div>
            <div id="About">
                <div id="aboutpic">
                    <img id="pic" src="https://thumbs.dreamstime.com/b/inventory-management-word-cloud-concept-grey-background-90880087.jpg"></img>
                </div>
                <br></br>
                <div id="about1">
                    <b>In the business world, usually, there is a difference in the timing or rate of supply and demand. To avoid this major issue, businesses hold inventory. Inventory refers to all the items, goods, merchandise, and materials held by a business for selling in the market to earn a profit. There are few other reasons as to why businesses hold an inventory.</b>
                    <br></br>
                    <b>1. Meet variation in production demand</b>
                    <br></br>
                    <b>2. Cater to cyclical and seasonal demand</b>
                    <br></br>
                    <b>3. Economies of scale in procurement</b>
                    <br></br>
                    <b>4. Take advantage of price increase and quantity discounts</b>
                    <br></br>
                    <b>5. Reduce transit cost and transit times</b>
                    <br></br>
                    <b>6. Long lead and high demand items need to be held in the inventory</b>
                    <br></br>
                    <br></br>
                    <b>Businesses that effectively use inventory management are destined to succeed. With the help of inventory management software, companies can automate the process of ordering, storing, and optimizing their goods in a single place.</b>
                    <br></br>
                    <br></br>
                    <b>Inventory management refers to the process of storing, ordering, and selling of goods and services. The discipline also involves the management of various supplies and processes. One of the most critical aspects of inventory management is managing the flow of raw materials from their procurement to finished products. The goal is to minimize overstocks and improve efficiency so that projects can stay on time and within budget. One of the most valuable assets of a company is its inventory. In various industries, such as retail, food services, and manufacturing, a lack of inventory can have detrimental effects. Aside from being a liability, inventory can also be considered a risk. It can be prone to theft, damage, and spoilage. Having a large inventory can also lead to a reduction in sales. Regardless of the size of the company, having a proper inventory management system is very important for any business. It can help them keep track of all their supplies and determine the exact prices. It can also help them manage sudden changes in demand without sacrificing customer experience or product quality.</b>
                    <br></br>
                    <br></br>
                    <b>This is a Web Application which implements a basic Inventory Management System. Through this, we will be handling multiple warehouses where we will be getting stocks from multiple suppliers and supplying the products to multiple clients. We will be maintaining the updated stock of the items after every transaction. We will also be doing a quality check before supplying the products to the clients where we will be checking if the required quality and the quality of items present in the stock match so that only quality items will be delivered to the customer. Once the client decides to buy the products, payment will be made by the client and an invoice will be generated.</b>
                </div>
            </div>
            <br></br>
            <Footer />
        </div>
    );
}

export default Navbar;