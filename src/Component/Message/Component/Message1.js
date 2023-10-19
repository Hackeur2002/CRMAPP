import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import axios from 'axios'
import { ServiceUtilisateur } from '../../../ServiceUtilisateur';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


export default function Message1(){
    const [value, setValue] = React.useState(0);

    useEffect(()=>{
        axios.get('http://localhost:3000/admin/discussions')
            .then(data => {
                
            })
            .catch(err => {
                alert('Erreur lors de la recherche des discussions')
            })
    },[])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return(
        <>
            

            <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor:'rgba(31, 142, 39, 0.85)' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab sx={{color:'white'}} label="Tout" {...a11yProps(0)} />
                      <Tab sx={{color:'white'}} label="Nouveau" {...a11yProps(1)} />
                      <Tab sx={{color:'white'}} label="Non lue(s)" {...a11yProps(2)} />
                      <Tab sx={{color:'white'}} label="Termine" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Tout
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Nouveau
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Non lue(s)
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Terminé
                </TabPanel>
            </Box>

        </>
    )
}