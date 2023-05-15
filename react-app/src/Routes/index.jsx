import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Pages/Main Page/Home";
import Shop from "../Components/Pages/Shop Page/Shop";


export const RouteComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/shop' element={<Shop />} />
        </Routes>
    )
}