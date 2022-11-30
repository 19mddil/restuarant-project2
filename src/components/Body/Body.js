import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";


const Body = () => (
    <div>
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </div>
)

export default Body;