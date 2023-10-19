import * as React from 'react';
//import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Team1 from './Component/Team1';
import Team2 from './Component/Team2'
import './team.css';


export default function Teams() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{/* backgroundColor:"#d3d3d3"*/}}>
      
            <Grid spacing={1} marginTop={5} sx={{display:'flex'}}>
              <Grid md={9}>
                <Team1 />
              </Grid>
              <Grid md={3} sx={{padding:1}}>
                <Team2 />
              </Grid>
            </Grid>


                  
    </div>
  );
}