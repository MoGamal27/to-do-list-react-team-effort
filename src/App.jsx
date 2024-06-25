import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login.jsx";
import Register from "./components/register.jsx";
import NotFound from "./components/404.jsx";
import Nav from "./components/nav.jsx";
import Home from "./components/home.jsx";
import NewList from "./components/newList.jsx";

import "./styles/App.css";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<NewList />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
