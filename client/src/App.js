import { Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';
import React from "react";
import Login from './login'

import Cart from './cart'

import Signup from './signup'
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
import About from './about'
import About1 from './about1'
import About2 from './about2'
import Itemlistnew1 from './itemlistnew1'
import Itemlistnew from './itemlistnew'
import Homepage1 from './homepage1'
import Homepage2 from './homepage2'
import Homepage3 from './homepage3'
import SpecialRequestForm from './specialrequestform'
import Cart from './cart';
import SellerForm from './sellerform';
import SellerForm1 from './sellerform1';
import SellerCart from './sellercart';
import Admin_homepage from './admin_homepage';
import AddItem from './add_item';
import DeleteItem from './delete_item';
import EditItem from './edit_item';
import ViewItem from './view_item';
import Customer from '/allcustomer';
import Supplier from './allsupplier';
import Ship from './shipping';
import Buyhistory from './buyerhistory';
import Sellhistory from './sellerhistory';
// import Header from "./navbar1";
// import Footer from "./footer";

function App2() {
   /* let theme = createTheme({
        palette: {
          primary: {
            main: '#0052cc',
          },
          secondary: {
            main: '#edf2ff',
          },
        },
      });
      
      theme = createTheme(theme, {
        palette: {
          info: {
            main: theme.palette.secondary.main,
          },
        },
      });
*/
    return (
        <>
        <div classname="page-container">
        <div classname="content-wrap">
        {/* <Navbar /> */}
            {/* <Routes>
                <Route path='/' element={<Cart />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/cotton' element={<Cotton />}></Route>
                <Route path='/jute' element={<Jute />}></Route>
                <Route path='/coffee' element={<Coffee />}></Route>
              
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
            </Routes>

                <Route path='/specialrequestform' element={<SpecialRequestForm />}></Route>
            </Routes> */}
            <Homepage2 />

        </div>
        </div>
           
        </>
    )
}

export default App2;