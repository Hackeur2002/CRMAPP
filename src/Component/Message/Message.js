import * as React from 'react';
import Message1 from './Component/Message1';
import Message2 from './Component/Message2';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';
import { ServiceUtilisateur } from '../../ServiceUtilisateur';

export default function Message() {

  const deconnexion = (e) => {
    axios.put('http://localhost:3000/admin/teams', { Id_Pers: ServiceUtilisateur.getId() })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log("voilà /admin/teams " + err)
      })
    ServiceUtilisateur.logout()
    window.location.reload()
  }
  return (
    <>
      <Grid marginTop={5} sx={{ display: "flex", flexDirection: "row", border:'0.5px solid #d3d3d3',borderLeft:0,padding:1,borderTop:0,borderRight:0}}>
            <Grid md={20}>
              <Typography variant="h6" component="div">
                Messages
              </Typography>
            </Grid>
            <Grid md={2}>
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
            </Grid>
          </Grid>
        <Grid spacing={0} marginTop={5} sx={{display:'flex'}}>
          <Grid md={5}>
            <Message1 />
          </Grid>
          <Grid md={7}>
            <Message2 />
          </Grid>
        </Grid>
    </>
    
  );
}