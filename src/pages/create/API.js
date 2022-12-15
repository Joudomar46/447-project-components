import axios from 'axios';
import React, { useState } from "react";
import {ResultsForm} from "./ResultForm";
import Table from "./Table";
import Paper from "@mui/material/Paper";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";



// function getDataFromAPI(requestParams)
export function DataFromAPI(keepoutPanels) {
  const [error, setError] = useState(null);
  const [clicked, setClicked] = useState(false);
  
  const [acMonthly, setAcMonthly] = useState([]);
  const [solardMonthly, setSolardMonthly] = useState([]);
  const [AcAnnual,setAcAnnual] = useState(0);
  const [solardAnnual, setSolardAnnual] = useState(0);

  const [resultsInfos, setresultsInfos] = useState("");
  const [flag,setFlag]=useState(false);

  const [showComponent, setShowComponent] = useState(false);

  // to remove form and show new form
  const [open, setOpen] = useState(false);

  function handleSubmit(
    resultsInfo
  ) {
    setresultsInfos(resultsInfo);
    
    setFlag(true);
    handleOpen();
  }
  // console.log(resultsInfos.system_capacity);

  if(flag && resultsInfos.address != ''){
    // My API Key for the nrel.gov website xM2kFyelHnDEEsM7l9MRd3TUruunJBq5NURxKVEL
    axios.get(`https://developer.nrel.gov/api/pvwatts/v8.json?&api_key=xM2kFyelHnDEEsM7l9MRd3TUruunJBq5NURxKVEL&azimuth=${resultsInfos.azmith}&system_capacity=${resultsInfos.system_capacity}&losses=${resultsInfos.losses}&array_type=${resultsInfos.array_type}&module_type=${resultsInfos.module_type}&gcr=${resultsInfos.gcr}&dc_ac_ratio=${resultsInfos.dc_ac_ratio}&inv_eff=${resultsInfos.inv_eff}&radius=${resultsInfos.radius}&dataset=${resultsInfos.dataset}&tilt=${resultsInfos.tilt}&address=${resultsInfos.address}&soiling=12|4|45|23|9|99|67|12.54|54|9|0|7.6&albedo=0.3&bifaciality=0.7`)

    // axios.get(`https://developer.nrel.gov/api/pvwatts/v8.json?&api_key=DEMO_KEY&azimuth=${resultsInfos.azmith}&system_capacity=${resultsInfos.system_capacity}&losses=${resultsInfos.losses}&array_type=${resultsInfos.array_type}&module_type=${resultsInfos.module_type}&gcr=${resultsInfos.gcr}&dc_ac_ratio=${resultsInfos.dc_ac_ratio}&inv_eff=${resultsInfos.inv_eff}&radius=${resultsInfos.radius}&dataset=${resultsInfos.dataset}&tilt=${resultsInfos.tilt}&address=${resultsInfos.address}&soiling=12|4|45|23|9|99|67|12.54|54|9|0|7.6&albedo=0.3&bifaciality=0.7`)
      .then(response => {
        setAcMonthly(response.data.outputs.ac_monthly);
        setSolardMonthly(response.data.outputs.solrad_monthly);
        setAcAnnual(response.data.outputs.ac_annual);
        setSolardAnnual(response.data.outputs.solrad_annual);
        
        // for each month create rows array to house corosponding monthly 
        // solarRadiation and Ac energy produced
        //for each row
      
      })
      .catch(err => {
        setError(err);
        console.log(err);
      })
      setFlag(false);
      setShowComponent(true);
  }

  const rows = [];
  if(acMonthly.length > 1){
    const  months = ['January', 'February', 'March', 'April','May','June','July'
    ,'Augest','September','October','November','December'];
     
      for (let i = 0; i < 12; i++) {
        rows.push({
          month: months[i],
          solarRad: solardMonthly[i].toFixed(2),
          AcEnergy: acMonthly[i].toFixed(2),
        });
       
      }
  }

//azimuth=180
//system_capacity=4 (kw)
//losses=14 (percent losses due to snow,shading)
//array_type=1 fixed (open rack= 0 or fixed roof mount=1)
//module_type=0 standard
//gcr=0.4 (GCR is defined as the ratio of the array area to the ground or roof area occupied by the array.)
//dc_ac_ratio=1.2 (1.2 is typical)
//inv_eff=96.0 (96% typical)
//radius=0 (The search radius to use when searching for the closest climate data station (miles). Pass in radius=0 to use the closest station regardless of the distance.)
//dataset=nsrdb (which weather set to use)
//tilt=10 (tilt of a panel)
//address=${info?.addr}
//&soiling=12|4|45|23|9|99|67|12.54|54|9|0|7.6&albedo=0.3&bifaciality=0.7`)


const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

return(
<>
  
<ResultsForm onClick={handleSubmit} keepoutPanels = {keepoutPanels}/>

{showComponent ?   
  
  <Box display="inline-block"
      justifyContent="center"
        alignItems="center">
        <Modal open={open} onClose={handleClose}>
        
       <Paper style={{ padding: 20, margin: 16 , 
        backgroundColor: '#F8F0E3', color: 'black', minHeight: '90vh',
        maxHeight: '100vh'}}>
        <Grid
        container
        spacing={1}
        justifyContent="space-around"
        alignItems="flex-start"
      >
     
         <Grid item xs={5}>
        <Button type="button" onClick={handleClose} color="primary">
       Close Results
      </Button> 
      <Table rows = {rows}/>
      </Grid>

      <Grid item xs={5}>
      <h4>Your Anual Solar Radiation: {solardAnnual.toFixed(2)} (kWh/m2/day)</h4>
      <h4>Your Anual AC: {AcAnnual.toFixed(2)} (kWh)</h4>
      <h4>Your total production value ${AcAnnual.toFixed(2)*resultsInfos.costPerKWH.toFixed(2)}</h4>     
       </Grid>
       </Grid> </Paper>  
        </Modal>
        </Box>
      
   
        : null}
   
</>
)}

