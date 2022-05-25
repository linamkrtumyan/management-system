import React, { useEffect, useState } from "react";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import Login from "./auth/Login";
import Board from "./boards/Board";
import Boards from "./boards/Boards";
import Header from "./header/Header";
import HomePage from "./home/HomePage";
import Navbar from "./navbar/Navbar";
import Users from "./users/Users";
import { useNavigate } from "react-router-dom";

function RoutesComponent() {
  let navigate = useNavigate();

  const [authorized, setAuthorized] = useState(
    localStorage.getItem("persist:autorized")
  );
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [authorizedUser, setAuthorizedUser] = useState(null);

  console.log(authorized, "authorized");
  console.log(typeof authorized, "type authorized");

  useEffect(() => {
    if (authorized === null) {
      localStorage.setItem("persist:autorized", 0);
    }

    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));

     
  }, []);

  useEffect(() => {
    setAuthorized(localStorage.getItem("persist:autorized"));
    // if (authorized) {
    //   navigate(`/boards`);
    // }
  }, [authorized]);

  function signIn(username, password) {
    const found = users.find(
      (user) => user.username === username && user.password === password
    );
    console.log(found, " found from routes");
    if (found === undefined) {
      setErrorMessage("Incorrect username or password");
      localStorage.setItem("persist:autorized", 0);
    } else {
      setAuthorized("1");
      setErrorMessage(null);
      localStorage.setItem("persist:autorized", 1);
      setAuthorizedUser(found?.fullname);
      localStorage.setItem("persist:user", found?.fullname);
      navigate(`/boards`);
    }
  }

  function signOut() {
    localStorage.setItem("persist:autorized", 0);
    setAuthorized("0");
  }

  return (
    <>
      {authorized === "1" ? (
        <>
          <div style={{ display: "flex" }}>
            <Navbar />
            <div style={{ width: "100%", marginLeft: "50px" }}>
              <Header signOut={signOut} authorizedUser={authorizedUser} />

              <Routes>
                {/* <Route path="/home" element={<HomePage />} /> */}
                <Route path="/boards" element={<Boards />} />
                <Route path="/boards/:boardID" element={<Board />} />
                <Route path="/users" element={<Users />} />

                <Route path="*" element={<Navigate to="/boards" replace />} />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <>
          <Routes>
            <Route
              path="/login"
              element={<Login signIn={signIn} errorMessage={errorMessage} />}
            />

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default RoutesComponent;
