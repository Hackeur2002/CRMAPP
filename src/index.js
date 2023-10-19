
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login"
import Register from "./Component/Register/Register";
import Dashboard from "./Component/Dashboard/Dashboard";
import Teams from "./Component/Team/Teams";
import Message from "./Component/Message/Message";
import Error from "./Error";
import AuthGuard from "./Component/Auth/AuthGuard";
import Invite from "./Component/Invite/Invite";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Component/Home/Home";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <Routes>
          <Route exact={true} path="/login" element={<Login />} />
          <Route exact={true} path="/home" element={<Home />} />
          <Route exact={true} path="/invite" element={<Invite />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="*" element={<Error />} />
          <Route index element={<Home />} />
          <Route path="/admin" element={<AuthGuard><App /></AuthGuard>}>
            <Route exact path="dashboard" element={<Dashboard />} />
            <Route exact path="teams" element={<Teams />} />
            <Route exact path="message" element={<Message />} />
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
  </BrowserRouter>
)
