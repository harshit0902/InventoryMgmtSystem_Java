import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './cotton';
import Login from './login'
import Signup from './signup'

import Cotton from './cotton'
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
