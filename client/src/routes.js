import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/home";

const PersonalizeRoutes = () => {
   return(
       <BrowserRouter>
        <Routes>
            <Route element = {<Home/>} path="/"  exact />
        </Routes>
       </BrowserRouter>
   )
}

export default PersonalizeRoutes;