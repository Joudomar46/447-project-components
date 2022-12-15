import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';

import React, { useState } from "react";

export const ResultsForm = ({onClick}) => {

  const [resultsInfo, setresultsInfo] = useState({
    address: "",
    azmith: "",
    system_capacity: "",
    losses: "",
    array_type: "",
    module_type:"",
    gcr:"",
    dc_ac_ratio:"1.2",
    inv_eff:"96.0",
    radius: "0",
    dataset:"nsrdb",
    tilt:"",
  });

  function handleSubmit(event) {
    event.preventDefault();
     // return the updated values to Create
     onClick(resultsInfo);
    }
  

  return (
    <>
     <Box display="flex"
      justifyContent="center"
        alignItems="center">
    <p>Enter the information bellow</p></Box>
      <Paper style={{ padding: 50, margin: 16 , 
        backgroundColor: '#F8F0E3', color: 'black'}}>
        <Grid container
        direction="row"
        justifyContent="space-around"
        alignItems="center" spacing={1}>

          <Grid item xs={6}>
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

          <Grid item xs={6}>
            <TextField
              name="azmith"
              label="Azmith"
              value={resultsInfo.azmith}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>

          <Grid item xs={6}>
            <TextField
              name="losses"
              label="Losses"
              value={resultsInfo.losses}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>

          <Grid item xs={6}>
            <TextField
              name="module_type"
              label="Module Type"
              value={resultsInfo.module_type}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>
          <Grid item xs={6}>
            <TextField
              name="array_type"
              label="Array Type"
              value={resultsInfo.array_type}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>

          <Grid item xs={6}>
            <TextField
              name="gcr"
              label="GCR"
              value={resultsInfo.gcr}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>

          <Grid item xs={6}>
            <p>Optional</p>
            <TextField
              name="dc_ac_ratio"
              label="DC AC Ratio"
              value={resultsInfo.dc_ac_ratio}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>

          <Grid item xs={6}>
            <TextField
              name="tilt"
              label="Panel Tilt"
              value={resultsInfo.tilt}
              onChange={(event) =>
                setresultsInfo({
                  ...resultsInfo,
                  [event.target.name]: event.target.value,
                })
              }
         /></Grid>

          <Grid item xs={12}>
            <form/>
            <Button  onClick={handleSubmit} type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <form/>

          </Grid>
       
        </Grid>
      </Paper>

   
    </>
  );
}

    