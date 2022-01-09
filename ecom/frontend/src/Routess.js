import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './core/Home';
import Signup from "./user/Signup";

const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/signup' exact element={<Signup />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Routess;