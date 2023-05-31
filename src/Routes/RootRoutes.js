import React from "react";
import ProductList from "../Components/ProductList";
import Login from "../Components/Login";
import { Route, Routes } from "react-router-dom";
import Register from "../Components/Register";
import Header from "../Components/Header";

function RootRoutes() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default RootRoutes;
