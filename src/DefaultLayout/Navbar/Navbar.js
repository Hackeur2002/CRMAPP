import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { ServiceUtilisateur } from '../../ServiceUtilisateur';

export default function Navbar() {
    const deconnexion = (e)=>{
        ServiceUtilisateur.logout()
        window.location.reload()
    }

    return (
        <Grid spacing={1} marginTop={5}>
            <Box sx={{ flexGrow: 1 }}>
                {/*<nav class="navbar navbar-default navbar-fixed-top">
                    <div class="container">
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={deconnexion}
                        >
                            <LogoutIcon />
                        </IconButton>
                    </div>
                </nav>*/}
                <div class="navbar">
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                </div>
            </Box>
        </Grid>
        
    );
}