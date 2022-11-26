import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './sellerform';
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
import Cart from './cart'
import Itemlistnew from './itemlistnew'
import SellerForm from './sellerform'
import SellCotton from './sell_cotton'
import BuyerConfirmation from "./buyerconfirmation";
import Itemlistnew1 from './itemlistnew1'
import SellerForm1 from './sellerform1';
import SellerCart from './sellercart';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <>
          <div id="add-background-img">
              <BrowserRouter>
                  <Routes>
                      <Route path='/' element={<App />}></Route>
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
                      <Route path='/buyerconfirmation' element={<BuyerConfirmation />}></Route>
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
