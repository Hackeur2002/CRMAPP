
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Component/Dashboard/Dashboard";
import Teams from "./Component/Team/Teams";
import Message from "./Component/Message/Message";
import Error from "./Error";

const AdminRouter = () => {
    return (
        <Routes>
            <Route path="/admin" element={<App />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/teams" element={<Teams />} />
                <Route exact path="/message" element={<Message />} />
                <Route exact path="/*" element={<Error />} />
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    )
}
export default AdminRouter