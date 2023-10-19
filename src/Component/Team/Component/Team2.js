import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import '../team.css';
import { ServiceUtilisateur } from '../../../ServiceUtilisateur';
import { useState } from 'react';


export default function Team2(){
  const [time, setTime] = useState(new Date(0));
    return (
        <>
                <Grid sx={{padding:1}}>
                  <Typography variant="h6" component="div">
                    Détails
                  </Typography>
                </Grid>
                <Grid sx={{padding:1}}>
                  <Card sx={{ boxShadow:10,backgroundColor:'white' }}>
                      <Grid >
                          <Grid sx={{display:'flex'}}>
                            <CardHeader
                                avatar={
                                  <Avatar sx={{ bgcolor: red[500],height:'5rem', width:'5rem' }} aria-label="recipe">
                                    {ServiceUtilisateur.getNom().charAt(0)}{ServiceUtilisateur.getPrenom().charAt(0)}
                                  </Avatar>
                                }
                            />
              
                            <div style={{marginBottom:5,lineHeight:2}}>
                                <Typography variant="overline" display="block" gutterBottom>
                    <span style={{ fontSize: '15px', fontWeight: 'bold' }}>{ServiceUtilisateur.getNom()} {ServiceUtilisateur.getPrenom()}</span>
                                </Typography>
                                <Typography variant="overline" display="block" gutterBottom>
                                    Support Agent
                                </Typography>
                                <Typography variant="overline" display="block" gutterBottom>
                                  {ServiceUtilisateur.getMail()}
                                </Typography>
                            </div>
                          </Grid>
                          <Divider/>
                          <div style={{padding:15,lineHeight:2}}>
                            <Typography variant="overline" display="block" gutterBottom>
                                Status : {ServiceUtilisateur.getStatut()}
                            </Typography>
                            <Typography variant="overline" display="block" gutterBottom>
                                Role : {ServiceUtilisateur.getRole()}
                            </Typography>                 
                          </div>
                             
                      </Grid>
                  </Card>
                </Grid>
                <br/>
                <Grid sx={{ padding: 1, boxShadow: 10, backgroundColor: 'white' }}>
                  <Grid sx={{fontWeight:'bold',fontSize:'20px'}}>
                    <Typography variant="h6" component="div">
                        Working hours
                    </Typography>
                    <Typography variant="h3" component="div">
                        20 s
                    </Typography>
                  </Grid>
                </Grid>
                <br/>
                <Grid sx={{ padding: 1, boxShadow: 10, backgroundColor: 'white' }}>
                  <Grid sx={{fontWeight:'bold',fontSize:'20px'}}>
                    <Typography variant="h6" component="div">
                        Performance
                    </Typography>

                    <Typography variant="h6" component="div">
                        <List sx={{ width: '100%', maxWidth: 360}}>
                            <ListItem>
                                <ChatBubbleOutlineIcon/> &nbsp;
                                <ListItemText primary={`Chat total `} />&nbsp; 0
                            </ListItem>
                            <ListItem>
                                <CheckCircleOutlineIcon/> &nbsp;
                                 <ListItemText primary={`Chat fini `} />&nbsp; 0
                            </ListItem>
                         </List>
                    </Typography>
                  </Grid>
                </Grid>
        </>
    )
}