import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './homepage2';
import Login from './login'
import Signup from './signup'
import SpecialRequestForm from "./specialrequestform";
import Cotton from './cotton'
import Jute from './jute'
import Coffee from './coffee'
import Steel from './steel'
import Aluminium from './aluminium'
import Copper from './copper'
import Wood from './wood'
import Wheat from './wheat'
import Bajra from './bajra'
import Ragi from './ragi'
import Itemlistnew from './itemlistnew'
import SellerForm from './sellerform'
import SellCotton from './sell_cotton'
import SellJute from './sell_jute'
import SellCoffee from './sell_coffee'
import SellSteel from './sell_steel'
import SellAluminium from './sell_aluminium'
import SellCopper from './sell_copper'
import SellWood from './sell_wood'
import SellWheat from './sell_wheat'
import SellBajra from "./sell_bajra";
import SellRagi from './sell_ragi'
import BuyerConfirmation from "./buyerconfirmation";
import Itemlistnew1 from './itemlistnew1'
import SellerForm1 from './sellerform1';
import SellerCart from './sellercart';
import Admin_homepage from './admin_homepage';
import AddItem from './add_item';
import DeleteItem from './delete_item';
import EditItem from './edit_item';
import ViewItem from './view_item';
import Customer from './allcustomer';
import Supplier from './allsupplier';
import Cart from './cart'
import AdminNavbar from "./admin_navbar";
import Navbar from "./navbar";
import Buyhistory from './buyerhistory';
import Sellhistory from './sellerhistory';
import CustomerNavbar from './customer_navbar'
import SupplierNavbar from "./supplier_navbar";
import About from './about'
import About1 from './about1'
import About2 from './about2'
import Footer from './footer';
import Logout from './logout'
import Homepage1 from './homepage1'
import Homepage2 from './homepage2'
import Homepage3 from './homepage3'
import Shipping from './shipping'
import SellerSpecialRequest from './seller_specialrequest'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>
            <div id="add-background-img">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Homepage1 />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/signup' element={<Signup />}></Route>
                        <Route path='/cotton' element={<Cotton />}></Route>
                        <Route path='/jute' element={<Jute />}></Route>
                        <Route path='/coffee' element={<Coffee />}></Route>
                        <Route path='/steel' element={<Steel />}></Route>
                        <Route path='/aluminium' element={<Aluminium />}></Route>
                        <Route path='/copper' element={<Copper />}></Route>
                        <Route path='/wood' element={<Wood />}></Route>
                        <Route path='/wheat' element={<Wheat />}></Route>
                        <Route path='/bajra' element={<Bajra />}></Route>
                        <Route path='/ragi' element={<Ragi />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                        <Route path='/itemlistnew' element={<Itemlistnew />}></Route>
                        <Route path='/itemlistnew1' element={<Itemlistnew1 />}></Route>
                        <Route path='/specialrequestform' element={<SpecialRequestForm />}></Route>
                        <Route path='/sellerform' element={<SellerForm />}></Route>
                        <Route path='/sellercart' element={<SellerCart />}></Route>
                        <Route path='/sellerform1' element={<SellerForm1 />}></Route>
                        <Route path='/sell_cotton' element={<SellCotton />}></Route>
                        <Route path='/sell_jute' element={<SellJute />}></Route>
                        <Route path='/sell_coffee' element={<SellCoffee />}></Route>
                        <Route path='/sell_steel' element={<SellSteel />}></Route>
                        <Route path='/sell_aluminium' element={<SellAluminium />}></Route>
                        <Route path='/sell_copper' element={<SellCopper />}></Route>
                        <Route path='/sell_wood' element={<SellWood />}></Route>
                        <Route path='/sell_wheat' element={<SellWheat />}></Route>
                        <Route path='/sell_bajra' element={<SellBajra />}></Route>
                        <Route path='/sell_ragi' element={<SellRagi />}></Route>
                        <Route path='/admin_homepage' element={<Admin_homepage />}></Route>
                        <Route path='/add_item' element={<AddItem />}></Route>
                        <Route path='/delete_item' element={<DeleteItem />}></Route>
                        <Route path='/edit_item' element={<EditItem />}></Route>
                        <Route path='/view_item' element={<ViewItem />}></Route>
                        <Route path='/allcustomer' element={<Customer />}></Route>
                        <Route path='/allsupplier' element={<Supplier />}></Route>
                        <Route path='/buyerhistory' element={<Buyhistory />}></Route>
                        <Route path='/sellerhistory' element={<Sellhistory />}></Route>
                        <Route path='/buyerconfirmation' element={<BuyerConfirmation />}></Route>
                        <Route path='/admin_navbar' element={<AdminNavbar />}></Route>
                        <Route path='/navbar' element={<Navbar />}></Route>
                        <Route path='/customer_navbar' element={<CustomerNavbar />}></Route>
                        <Route path='/supplier_navbar' element={<SupplierNavbar />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/about1' element={<About1 />}></Route>
                        <Route path='/about2' element={<About2 />}></Route>
                        <Route path='/footer' element={<Footer />}></Route>
                        <Route path='/logout' element={<Logout />}></Route>
                        <Route path='/shipping' element={<Shipping />}></Route>
                        <Route path='/seller_specialrequest' element={<SellerSpecialRequest />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>

            <div id="add-background-img">
                <BrowserRouter>
                    <Routes>
                        <Route path='/homepage1' element={<Homepage1 />}></Route>
                        <Route path='/homepage2' element={<Homepage2 />}></Route>
                        <Route path='/homepage3' element={<Homepage3 />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
