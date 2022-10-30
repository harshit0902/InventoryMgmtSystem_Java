import { Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles';

import Login from './login'
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
                <Route path='/specialrequestform' element={<SpecialRequestForm />}></Route>
            </Routes>
        </div>
        </div>
           
        </>
    )
}

export default App