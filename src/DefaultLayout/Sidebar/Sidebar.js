import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import routes from '../../routes';
import { ServiceUtilisateur } from '../../ServiceUtilisateur';
import './sidebar.css';




export default function Sidebar(){
    const deconnexion = (e) => {
        ServiceUtilisateur.logout()
        window.location.reload()
    }
    //const { collapseSidebar } = useProSidebar();
    const LesRoutes = routes.map(route => (
        <ListItem key={route.key}>
            <ListItemButton href={route.route}>
                <ListItemIcon>
                    {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.name} />
            </ListItemButton>
        </ListItem>
        
        
    ))
    return (
        <Box
            sx={{
                textAlign: 'center',
                width: 250,
                mt: 3,
                ml: 3,
                height: 50+'rem',
                borderRadius: 2,
                position: 'fixed',
                background: 'linear-gradient(to right, rgba(31, 142, 39, 0.85), rgba(215, 60, 127, 0.85))',
                display: 'flex',
                flexDirection: 'column',
                top: '0px',
                zIndex:1
                
                /*'&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
                },*/
            }}
        >
            <Typography sx={{p:3,color:'white'}} variant="overline" display="block" gutterBottom>
                WELCOME TO CHAT
            </Typography>
            <Divider variant="middle" sx={{
                backgroundColor:'white'
                }} />
            
            <Box sx={{ width: '100%', maxWidth: 360, color:'white'}}>
                <nav>
                    <List>
                        {LesRoutes}
                    </List>
                </nav>
            </Box>
            
        </Box>
    )
}