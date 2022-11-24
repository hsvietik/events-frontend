import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login/Login";
import NavbarMenu from "./Components/Navbar/Navbar";
import axios from "axios";

import { ApiClient } from "./Components/ApiClient";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";
import AddEvent from "./Components/CreateEvent/AddEvent";

const App = (props) => {
  const [token, changeToken] = useState(window.localStorage.getItem("token"));
  const client = new ApiClient(
    () => token,
    () => logout()
  );

  const logout = () => {
    window.localStorage.removeItem("token");
    changeToken(undefined);
  };

  const login = (authToken) => {
    window.localStorage.setItem("token", authToken);
    changeToken(authToken);
  };

  return (
    <>
      <NavbarMenu logout={logout} client={client} />
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard client={client} />} />
          <Route
            exact
            path="/login"
            element={
              <Login loggedIn={(token) => login(token)} client={client} />
            }
          />
          <Route exact path="/add" element={<AddEvent />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
