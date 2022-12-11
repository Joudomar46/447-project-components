import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';


import React, { useState } from "react";

export function Form({ onSubmit }) {
  const [panelDimention, setPanelDimention] = useState({
    panelWidth: "",
    panelHeight: "",
  });

  const [roofDimention, setRoofDimention] = useState({
    roofWidth: "",
    roofHeight: "",
  });

  const [spacingDimention, setSpacingDimention] = useState({
    columnSpacing: "",
    rowSpacing: "",
    edgeSpacing:"",
  });




  // Handle submit
  function handleSubmit(event) {
    event.preventDefault();

    // return the updated values to Create
    onSubmit(panelDimention,roofDimention,spacingDimention);
  }

  return (
    
    <>
     <Box   display="flex"
  justifyContent="center"
  alignItems="center">
    <p>Enter the information bellow</p></Box>
      <Paper style={{ padding: 50, margin: 16 , 
        backgroundColor: '#F8F0E3', color: '#F8F0E3'}}>
        <Grid container
        direction="column"
        justifyContent="space-around"
        alignItems="center" spacing={1}>

          <Grid item xs={6}>
            <TextField
              name="panelWidth"
              label="Panel Width"
              value={panelDimention.panelWidth}
              onChange={(event) =>
                setPanelDimention({
                  ...panelDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              name="panelHeight"
              label="Panel Height"
              value={panelDimention.panelHeight}
              onChange={(event) =>
                setPanelDimention({
                  ...panelDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <TextField
              name="roofWidth"
              label="Roof Width"
              value={roofDimention.roofWidth}
              onChange={(event) =>
                setRoofDimention({
                  ...roofDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              name="roofHeight"
              label="Roof Hight"
              value={roofDimention.roofHeight}
              onChange={(event) =>
                setRoofDimention({
                  ...roofDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>

            <Grid item xs={6} sm={6}>
            <TextField
              name="columnSpacing"
              label="Column Spacing"
              value={spacingDimention.columnSpacing}
              onChange={(event) =>
                setSpacingDimention({
                  ...spacingDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              name="rowSpacing"
              label="Row Spacing"
              value={spacingDimention.rowSpacing}
              onChange={(event) =>
                setSpacingDimention({
                  ...spacingDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              name="edgeSpacing"
              label="Edge Spacing"
              value={spacingDimention.edgeSpacing}
              onChange={(event) =>
                setSpacingDimention({
                  ...spacingDimention,
                  [event.target.name]: event.target.value,
                })
              }
            />
            </Grid>

          <Grid item xs={12}>
            <form/>
            <Button   onClick={handleSubmit} type="submit" variant="contained" color="primary" >
              Submit
            </Button>
            <form/>

          </Grid>
       
        </Grid>
      </Paper>

   
    </>
  );
}
