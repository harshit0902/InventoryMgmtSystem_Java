import {useEffect, useState} from "react";
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { NavLink, Link } from 'react-router-dom'
import Header from './customer_navbar'
import Footer from './footer'
import Axios from "axios";

function App() {
    const navigate=useNavigate()
    const [itemDetails, setItemDetails] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:9091/api/admin/displayitem', {
        }).then((response) => {
            setItemDetails(response.data);
        });
    }, []);

    return (


        <><Header />
            <div>
                <center>
                    <h1 id="Items_new">
                        <h3> <button id="button-result"><Link id="sign" to='/cart'>Cart</Link></button></h3>

                    </h1>
                </center><div class="flex-container">
                    <div>
                        <center>
                            <h1 id="Items_new_sell">
                                Cotton <h3>Quantity available <div>
                                    {itemDetails.map((item) => (
                                        item.itemName === "Cotton" ? (
                                            <div key={item.id}>
                                                {item.quantity}
                                            </div>
                                        ) : (""))
                                    )}
                                </div> <button id="button-result"><Link id="sign" to='/cotton'>Order now</Link></button></h3>

                            </h1>
                        </center>
                    </div>
                    <div>
                        <img src="https://www.orfonline.org/wp-content/uploads/2022/10/cotton-production.jpg" alt="Cotton" width="300px" height="300px"></img>
                    </div>
                </div>
                <div class="flex-container">
                <div>
                <center>
                    <h1 id="Items_new_sell">
                        Jute <h3>Quantity available <div>
                            {itemDetails.map((item) => (
                                item.itemName === "Jute" ? (
                                    <div key={item.id}>
                                        {item.quantity}
                                    </div>
                                ) : (""))
                            )}
                        </div> <button id="button-result"><Link id="sign" to='/jute'>Order now</Link></button></h3>

                    </h1>
                </center>
                </div>
                <div>
                        <img src="https://textilevaluechain.in/wp-content/uploads/2020/09/JUTE-27-11-19.jpg" alt="Jute" width="300px" height="300px"></img>
                    </div>
                </div><div class="flex-container">
                    <div>
                <center>
                    <h1 id="Items_new_sell">
                        Coffee <h3>Quantity available <div>
                            {itemDetails.map((item) => (
                                item.itemName === "Coffee" ? (
                                    <div key={item.id}>
                                        {item.quantity}
                                    </div>
                                ) : (""))
                            )}
                        </div> <button id="button-result"><Link id="sign" to='/coffee'>Order now</Link></button></h3>

                    </h1>
                </center>
                </div>
                <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Roasted_coffee_beans.jpg/220px-Roasted_coffee_beans.jpg" alt="Coffee" width="300px" height="300px"></img>
                    </div>
                </div><div class="flex-container">
                    <div>
                <center>
                    <h1 id="Items_new_sell">
                        Steel <h3>Quantity available <div>
                            {itemDetails.map((item) => (
                                item.itemName === "Steel" ? (
                                    <div key={item.id}>
                                        {item.quantity}
                                    </div>
                                ) : (""))
                            )}
                        </div> <button id="button-result"><Link id="sign" to='/steel'>Order now</Link></button></h3>

                    </h1>
                </center>
                </div>
                <div>
                        <img src="https://www.rapiddirect.com/wp-content/uploads-v0/2021/03/stainless-steel-types.jpg" alt="Steel" width="300px" height="300px"></img>
                    </div>
                </div><div class="flex-container">
                    <div>
                <center>
                    <h1 id="Items_new_sell">
                        Aluminium <h3>Quantity available <div>
                            {itemDetails.map((item) => (
                                item.itemName === "Aluminium" ? (
                                    <div key={item.id}>
                                        {item.quantity}
                                    </div>
                                ) : (""))
                            )}
                        </div> <button id="button-result"><Link id="sign" to='/aluminium'>Order now</Link></button></h3>

                    </h1>
                </center></div>
                <div>
                        <img src="https://media.istockphoto.com/id/1329224879/photo/raw-aluminum-sheets.jpg?s=612x612&w=0&k=20&c=riymPNoC7nJivnEQ0I-QpGxrAGgtERmFPITJYuql9kA=" alt="Aluminium" width="300px" height="300px"></img>
                    </div>
                </div><div class="flex-container">
                    <div>
                <center>
                    <h1 id="Items_new_sell">
                        Copper <h3>Quantity available <div>
                            {itemDetails.map((item) => (
                                item.itemName === "Copper" ? (
                                    <div key={item.id}>
                                        {item.quantity}
                                    </div>
                                ) : (""))
                            )}
                        </div> <button id="button-result"><Link id="sign" to='/copper'>Order now</Link></button></h3>

                    </h1>
                </center>
                </div>
                <div>
                        <img src="http://www.aculon.com/wp-content/uploads/2020/10/Copper.jpg" alt="Copper" width="300px" height="300px"></img>
                    </div>
                </div><div class="flex-container">
                    <div>
                <center>
                    <h1 id="Items_new_sell">
                        Wood <h3>Quantity available <div>
                            {itemDetails.map((item) => (
                                item.itemName === "Wood" ? (
                                    <div key={item.id}>
                                        {item.quantity}
                                    </div>
                                ) : (""))
                            )}
                        </div> <button id="button-result"><Link id="sign" to='/wood'>Order now</Link></button></h3>

                    </h1>
                </center> </div>
                <div>
                        <img src="https://static.scientificamerican.com/blogs/cache/file/7468562B-7EBC-4D8A-B6820036ED274FA7_source.jpg?w=690&h=930&4866B8A3-9660-4D40-A221BEA24E521B1A" alt="Wood" width="300px" height="300px"></img>
                    </div>
                </div><div class="flex-container">
                    <div>
                <center>
                    <h1 id="Items_new_sell">
                        Wheat <h3>Quantity available <div>
                            {itemDetails.map((item) => (
                                item.itemName === "Wheat" ? (
                                    <div key={item.id}>
                                        {item.quantity}
                                    </div>
                                ) : (""))
                            )}
                        </div> <button id="button-result"><Link id="sign" to='/wheat'>Order now</Link></button></h3>

                    </h1>
                </center></div>
                <div>
                        <img src="https://cdn.britannica.com/90/94190-050-C0BA6A58/Cereal-crops-wheat-reproduction.jpg" alt="Wheat" width="300px" height="300px"></img>
                    </div>
                </div><div class="flex-container">
                    <div>
                <center>
                    <h1 id="Items_new_sell">
                        Bajra <h3>Quantity available <div>
                            {itemDetails.map((item) => (
                                item.itemName === "Bajra" ? (
                                    <div key={item.id}>
                                        {item.quantity}
                                    </div>
                                ) : (""))
                            )}
                        </div> <button id="button-result"><Link id="sign" to='/bajra'>Order now</Link></button></h3>

                    </h1>
                </center></div>
                <div>
                        <img src="https://rukminim1.flixcart.com/image/416/416/jxdkpzk0/plant-seed/g/m/z/14000-hybrid-bajra-pearl-millet-seeds-14-kgs-seeds-green-world-original-imafhtq3umyragee.jpeg?q=70" alt="Bajra" width="300px" height="300px"></img>
                    </div>
                </div><div class="flex-container">
                    <div>
                <center>
                    <h1 id="Items_new_sell">
                        Ragi <h3>Quantity available <div>
                            {itemDetails.map((item) => (
                                item.itemName === "Ragi" ? (
                                    <div key={item.id}>
                                        {item.quantity}
                                    </div>
                                ) : (""))
                            )}
                        </div> <button id="button-result"><Link id="sign" to='/ragi'>Order now</Link></button></h3>

                    </h1>
                </center></div>
                <div>
                        <img src="https://static.toiimg.com/thumb/93307960.cms?width=680&height=512&imgsize=70070" alt="Ragi" width="300px" height="300px"></img>
                    </div>
                </div>
            </div><Footer /></>


    )

}
  export default App;
  