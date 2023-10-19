

import Sidebar from "./DefaultLayout/Sidebar/Sidebar";
import Navbar from "./DefaultLayout/Navbar/Navbar"
import routes from './routes';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Grid from '@mui/material/Unstable_Grid2';
import './App.css';



export default function App() {

  {/*const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return <Routes key={route.key}><Route exact path={route.route} element={route.component} key={route.key} /></Routes>;
      }
      return null;
    });*/}

  return (
            <Grid container >
              <Grid md={2} className="sidebar">
                <Sidebar/>
              </Grid>
              <Grid  md={10}>
                {/*getRoutes(routes)*/}
                <Outlet/>
              </Grid>
            </Grid>
    
      
  );
}