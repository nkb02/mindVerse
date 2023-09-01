// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useContext } from "react";
import {Context} from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return (
    <div>
      <Router>
        <TopBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />
          <Route path="/post/:id" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
