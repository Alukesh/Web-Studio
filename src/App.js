import logo from './logo.svg';
import Layout from "./Layout/Layout";
import './app.scss'
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Works from "./pages/Works/Works";
import Clients from "./pages/Clients/Clients";
import About from "./pages/About/About";
import Prices from "./pages/Prices/Prices";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='works' element={<Works/>}/>
                <Route path='prices' element={<Prices/>}/>
                <Route path='clients' element={<Clients/>}/>
                <Route path='contact' element={<Contacts/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
