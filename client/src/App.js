import { Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';

import Login from './login'
import Signup from './signup'
import SpecialRequestForm from './specialrequestform'

// import Header from "./navbar1";
// import Footer from "./footer";

function App() {
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
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/specialrequestform' element={<SpecialRequestForm />}></Route>
            </Routes>
        </div>
        </div>
           
        </>
    )
}

export default App