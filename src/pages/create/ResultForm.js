import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import React, { useState } from "react";

export const ResultsForm = ({onClick, keepoutPanels}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [resultsInfo, setresultsInfo] = useState({
    address: "",
    azmith: "",
    losses: "14",
    array_type: "",
    module_type:"0",
    gcr:"0.4",
    dc_ac_ratio:"1.2",
    inv_eff:"96.0",
    radius: "0",
    dataset:"nsrdb",
    tilt:"",
    panelWattage:350, 
    system_capacity: 4,
    costPerKWH: .14
  });

  function handleSubmit(event) {
    event.preventDefault();
    // return the updated values to Create
    // Arrray Size (kW) = Module Nameplate Size (W) × Number of Modules ÷ 1,000 W/kW

     resultsInfo.system_capacity = (+keepoutPanels.keepoutPanels * +resultsInfo.panelWattage) /1000;
     
     console.log(resultsInfo.system_capacity);
     onClick(resultsInfo);
    }
  
    // for drop down menu
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleMenuItemClick = (event, value) => {
      resultsInfo.array_type = value;
      console.log(resultsInfo);

      setAnchorEl(null);
    };

  return (
    <>
     <Box display="flex"
      justifyContent="center"
        alignItems="center">
    <h3>Enter the information bellow</h3></Box>
      <Paper style={{ padding: 50, margin: 16 , 
        backgroundColor: '#F8F0E3', color: 'black'}}>
        <Grid container
          direction="row"
          justifyContent="space-evenly"
          alignItems="baseline" spacing={1}>

          <Grid item xs = "auto">
            <TextField
              name="address"
              label="Address"
              value={resultsInfo.address}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>

          <Grid item xs= "auto">
          <p>Select Array Type</p>
          <Button color="primary"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
             >
               {(resultsInfo.array_type === '0') ? 'Fixed - Open Rack' : 
               (resultsInfo.array_type === '1') ? 'Fixed - Roof Mounted' 
               : 'Open Menu'}

            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
            <MenuItem onClick={(event) => handleMenuItemClick(event, '0')}>Fixed - Open Rack</MenuItem>
            <MenuItem onClick={(event) => handleMenuItemClick(event, '1')}>Fixed - Roof Mounted</MenuItem>
            </Menu>
            
         </Grid>

          <Grid item xs= "auto">
            <TextField
              name="azmith"
              label="Azmith - Degrees"
              value={resultsInfo.azmith}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>

         <Grid item xs= "auto">
            <TextField
              name="tilt"
              label="Panel Tilt - Degrees"
              value={resultsInfo.tilt}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>

          <Grid item xs= "auto">
            <TextField
              name="panelWattage"
              label="Panel Wattage W (optional)"
              value={resultsInfo.panelWattage}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>
          <Grid item xs= "auto">
            <TextField
              name="costPerKWH"
              label="$Cost kWh (optional)"
              value={resultsInfo.costPerKWH}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>

          <Grid item xs= "auto">
            <TextField
              name="losses"
              label="Percent Losses (optional)"
              value={resultsInfo.losses}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>

          <Grid item xs= "auto">
            <TextField
              name="gcr"
              label="GCR 0-1 (optional)"
              value={resultsInfo.gcr}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>
         
          <Grid item xs= "auto">
            <TextField
              name="dc_ac_ratio"
              label="DC AC Ratio (optional)"
              value={resultsInfo.dc_ac_ratio}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>


          <Grid item xs={12}>
          <Box display="flex"
              justifyContent="center"
                alignItems="center">
                  <form/>
      
      <Button sx={{
        marginBottom: '30px'}} onClick={handleSubmit} type="submit" variant="contained" color="primary">
          View Table
      </Button>
      <form/>

      </Box>
            
          </Grid>
       
        </Grid>
 
      </Paper>

   
    </>
  );
}

{/* <Button
disabled={panelDimentions === ""}
type="button"
onClick={handleOpen}
color="primary"
>
Open Modal
</Button>
<Modal open={open} onClose={handleClose}>
<div>
<DataFromAPI info={info} />
  <Button type="button" onClick={handleClose} color="primary">
    Close Modal
  </Button>
</div>
</Modal> */}