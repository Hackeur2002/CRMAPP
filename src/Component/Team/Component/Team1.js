import React, {useEffect, useState} from 'react';
//import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import DialogContentText from '@mui/material/DialogContentText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';
import '../team.css';
import { ServiceUtilisateur } from '../../../ServiceUtilisateur';

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

            
            
export default function Team1() {
    const [open, setOpen] = useState(false);
    const [mail, setMail] = useState('')
    const [role, setRole] = useState('')
    const [inviters, lesinviters] = useState([])
    
    //let user = ServiceUtilisateur.getId()
    useEffect(() =>{
      console.log(ServiceUtilisateur.getStatut())
      axios.post('http://localhost:3000/admin/team', { Id_Pers: ServiceUtilisateur.getId(), Id_Ent: ServiceUtilisateur.getIdEnt(), RoleBase: ServiceUtilisateur.getRole()  })
        .then(async(res) => {
          if (res.data.info == 0){
            alert("Aucun membre pour le moment")
          }else{
            await lesinviters(res.data.info)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },[])
   console.log('State',inviters)
   let i = inviters.length + 1
    const InviteForm = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/admin/teams',
        { Id_Pers:ServiceUtilisateur.getId(), mail: mail, role: role })
        .then(data => {
          console.log(data.data);
          alert('Invitation envoyé')
        })
        .catch(err => {
          alert('Vérifiez vos informations')
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const supprimer = (id) => {
      if(window.confirm("Vous êtes sûr de vouloir supprimer ce membre de votre team ?")==true){
        axios.delete(`http://localhost:3000/admin/teams/${id}`)
          .then((response) => {
            alert("Suppression éffectuer avec succès")
            window.location.reload();
          })
          .catch((err) => { alert("Une erreur s'est produite lors de la suppression") })
      }
    };
    const changerRole = (id) => {
      
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
        setOpen(false);
        }
    };
  const deconnexion = (e) => {
    axios.put('http://localhost:3000/admin/teams', { Id_Pers: ServiceUtilisateur.getId() })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log("voilà /admin/teams "+err)
      })
    ServiceUtilisateur.logout()
    window.location.reload()
  }
    return (
        <>
                <Grid sx={{display:"flex", flexDirection:"row",border:'0.5px solid #d3d3d3',borderLeft:0,padding:1,borderTop:0,borderRight:0}}>
                  <Grid md={20}>
                    <Typography variant="h6" component="div">
                      Team
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
                {ServiceUtilisateur.getRole() == "Propriétaire" || ServiceUtilisateur.getRole() == "Responsable" ? (
                <Grid sx={{ padding: 1, mt: 3, mb: 1.5 }}>
                  <Stack spacing={2} direction="row">
              <Button 
              sx={{
                p: 1.5, bgcolor: 'rgba(31, 142, 39, 0.85)', '&:hover': {
                  backgroundColor: 'rgba(31, 142, 39, 0.85)',
                  color: 'white',
                }, }} onClick={handleClickOpen} variant="contained">
                      <AddIcon sx={{ color: 'white' }} />
                      Inviter Agent
                    </Button>
                  </Stack>
                </Grid>
                ) : ""}
                
                <Grid sx={{padding:1,mb:1.5}}>
                  <Typography variant="h6" component="div">
                    Active({i})
                  </Typography>
                </Grid>
                <Grid >
                  <TableContainer sx={{ boxShadow:15, backgroundColor:"white"}}>
                      <Table sx={{ minWidth: 650}}>
                        <TableHead>
                          <TableRow sx={{ bgcolor: 'rgba(215, 60, 127, 0.85)' }}>
                            <TableCell sx={{ p: 3, color: 'white' }}>Nom</TableCell>
                            <TableCell sx={{ p: 3, color: 'white' }}>Prénom</TableCell>
                            <TableCell sx={{ p: 3, color: 'white' }} align="right">Rôle</TableCell>
                            <TableCell sx={{ p: 3, color: 'white' }} align="right">Status</TableCell>
                            {ServiceUtilisateur.getRole() == "Propriétaire" || ServiceUtilisateur.getRole() == "Propriétaire" ?
                            (<TableCell sx={{ p: 3, color: 'white' }} align="right">Action</TableCell>) : ("")}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell sx={{ p: 3 }}>
                              {ServiceUtilisateur.getNom()} <span style={{ color: 'rgba(31, 142, 39, 0.85)' }}>(VOUS)</span>
                            </TableCell>
                            <TableCell sx={{ p: 3 }}>
                              {ServiceUtilisateur.getPrenom()}
                            </TableCell>
                            <TableCell sx={{ p: 3 }} align="right">{ServiceUtilisateur.getRole()}</TableCell>
                            <TableCell sx={{ p: 3 }} align="right">{!isNaN(ServiceUtilisateur.getId()) ? "En ligne" : ""}</TableCell>
                  {ServiceUtilisateur.getRole() == "Propriétaire" || ServiceUtilisateur.getRole() == "Propriétaire" ?
                  (<TableCell sx={{ p: 3 }} align="right"></TableCell>):("")}
                          </TableRow>
                          {inviters.map(inviter => (
                            <TableRow key={inviter.Id_Pers}>
                              <TableCell sx={{p:3}}>
                                {inviter.nom}
                              </TableCell>
                              <TableCell sx={{ p: 3 }}>
                                {inviter.prenom}
                              </TableCell>
                              <TableCell sx={{ p: 3 }} align="right">{inviter.RoleBase}</TableCell>
                              <TableCell sx={{p:3}} align="right">{inviter.statut}</TableCell>
                              {ServiceUtilisateur.getRole() == "Propriétaire" || ServiceUtilisateur.getRole() == "Propriétaire" ?
                              (<TableCell align="right">
                                <IconButton aria-label="delete" onClick={() => supprimer(inviter.Id_Pers)}>
                                  <DeleteIcon />
                                </IconButton>
                                /
                                <IconButton onClick={() => changerRole(inviter.Id_Pers)}>
                                  <ChangeCircleIcon />
                                </IconButton>
                              </TableCell>):("")}
                            </TableRow>
                            
                          ))}
                        </TableBody>
                      </Table>
                  </TableContainer>
                </Grid>
            <Dialog open={open} onSubmit={InviteForm}>
                <form>
                  <DialogTitle>Inviter un agent</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Envoyer votre invitation pour qu'un agent puisse rejoindre votre team.
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="mail"
                      label="Email Address"
                      type="email"
                      fullWidth
                      variant="standard"
                      onChange={(e) => setMail(e.target.value)}
                      value={mail}
                    />
                    <div style={{ marginTop: '5%' }}>
                      <select onChange={(e) => setRole(e.target.value)} value={role} style={{ borderLeft: 0, borderRight: 0, borderRadius: 0, borderTop: 0 }} class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="Agent">Agent</option>
                        <option value="Responsable">Responsable</option>
                      </select>
                    </div>

                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Annuler</Button>
                    <Button type='submit' onClick={handleClose}>Inviter</Button>
                  </DialogActions>
                </form>
            </Dialog>

            
        </>
    )
}