import * as React from 'react';
//import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { ServiceUtilisateur } from '../../ServiceUtilisateur';
import axios from 'axios';

export default function Dashboard() {
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
    <div>
            <Grid marginTop={5} sx={{ display: "flex", flexDirection: "row", border: '0.5px solid #d3d3d3', borderLeft: 0, padding: 1, borderTop: 0, borderRight: 0 }}>
                <Grid md={20}>
                    <Typography variant="h6" component="div">
                        Dashboard
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

            <Card sx={{ boxShadow:5,ml:5, mt:3, width:"50%" }}>
                      <Grid >
                          <Grid sx={{display:'flex'}}>
                            <Grid>
                                <CardHeader
                                    avatar={
                                    <Avatar sx={{ bgcolor: red[500],height:'5rem', width:'5rem' }} aria-label="recipe">
                                        {ServiceUtilisateur.getNom().charAt(0)}{ServiceUtilisateur.getPrenom().charAt(0)}
                                    </Avatar>
                                    }
                                />
                            </Grid>
                            
                            <Grid sx={{p:2}}>
                                <div>
                                    <span style={{fontSize:'25px',fontWeight:'bold',fontFamily:'sans-serif'}}>Good Afternoon, {ServiceUtilisateur.getNom()} {ServiceUtilisateur.getPrenom()}</span>
                                    <br/>
                                    <span style={{fontSize:'15px',fontWeight:'semi-bold'}}>Ravi de vous revoir !</span>
                                </div>
                            </Grid>
                          </Grid>              
                      </Grid>
                  </Card>

        <section style={{width:'80%',marginLeft:'5%',marginTop:'5%'}}>
            <Typography variant="h5" component="div">
                Suivi en temps réel
            </Typography>
            <br/>
            <Grid container spacing={3} sx={{display:'flex', backgroundColor:"white", boxShadow:15}}>
                <Grid xs={12} md={6} lg={3}>
                    <Card sx={{ minWidth: 90,p:3,boxShadow:0 }}>
                        <Typography variant="h6" component="div">
                            Member's Online
                        </Typography>
                        <br/>
                        <Typography variant="h4" component="div">
                            0
                        </Typography>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <Card sx={{ minWidth: 90,p:3,boxShadow:0 }}>
                        <Typography variant="h6" component="div">
                            Member's Online
                        </Typography>
                        <br/>
                        <Typography variant="h4" component="div">
                            0
                        </Typography>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <Card sx={{ minWidth: 90,p:3,boxShadow:0 }}>
                        <Typography variant="h6" component="div">
                            New Message
                        </Typography>
                        <br/>
                        <Typography variant="h4" component="div">
                            0
                        </Typography>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} lg={3}>
                    <Card sx={{ minWidth: 90,p:3,boxShadow:0 }}>
                        <Typography variant="h6" component="div">
                            Member's Online
                        </Typography>
                        <br/>
                        <Typography variant="h4" component="div">
                            0
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </section>
        

    </div>
  );
}