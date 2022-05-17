import React, { useEffect, useState } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./auth/Login";
import Board from "./boards/Board";
import Boards from "./boards/Boards";
import Header from "./header/Header";
import HomePage from "./home/HomePage";
import Navbar from "./navbar/Navbar";

function RoutesComponent() {
  const [authorized, setAuthorized] = useState(true);

  return (
    <>
      {authorized ? (
        <>
          <div style={{ display: "flex" }}>
            <Navbar />
            <div style={{width:"100%"}} >
              <Header />

              <Routes>
                <Route path="/board" element={<App />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<Boards />} />
                <Route path="/:boardID" element={<Board />} />
                
                {/* <Route path="*" element={<Navigate to="/home" replace />} /> */}
              </Routes>
            </div>
          </div>

          {/* <header>
      <Link to="/home" >Home</Link>
      <Link to="/login" >Login</Link>
      <Link to="/board" >Board</Link>
    </header> */}
        </>
      ) : (
        <>
          <Routes>
            {/* <Route path="/board" element={<App />} /> */}
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<Navigate to="/login" replace />} />
            {/* <Route path="/home" element={<HomePage />} /> */}
          </Routes>
        </>
      )}
      {/* <header>
      <Link to="/home" >Home</Link>
      <Link to="/login" >Login</Link>
      <Link to="/board" >Board</Link>
    </header>
      <Routes>
        <Route path="/board" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
      </Routes> */}
    </>
  );
}

export default RoutesComponent;
