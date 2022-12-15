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


  // for input validation
  const [inputError, setInputError] = useState(false);
  const [inputError1, setInputError1] = useState(false);
  const [inputError2, setInputError2] = useState(false);
  const [inputError3, setInputError3] = useState(false);
  const [inputError4, setInputError4] = useState(false);
  const [inputError5, setInputError5] = useState(false);
  const [inputError6, setInputError6] = useState(false);


  // Handle submit
  function handleSubmit(event) {
    event.preventDefault();
    let value = false;  //handling the full form input
    setInputError(false);
    setInputError1(false);
    setInputError2(false);
    setInputError3(false);
    setInputError4(false);
    setInputError5(false);
    setInputError6(false);


    // Validate the input
    if (+panelDimention.panelWidth <= 0 ) {
      // Input is empty, show an error message
      setInputError('Enter a value greater than 0');
      value = true;
    }
    if (+panelDimention.panelHeight <= 0 ) {
      setInputError1('Enter a value greater than 0');
      value = true;
    }
   
    if (+roofDimention.roofWidth <= 0){
      setInputError2('Enter a value greater than 0');
      value = true;
    }if (+roofDimention.roofWidth <= +panelDimention.panelWidth){
        setInputError2('Roof width cannot be less than panel width');
        value = true;
    }if (+roofDimention.roofWidth <= +panelDimention.panelHeight){
        setInputError2('Roof width cannot be less than panel height');
        value = true;
    }

    if (+roofDimention.roofHeight <= 0){
      setInputError3('Enter a value greater than 0');
      value = true;
    }if (+roofDimention.roofHeight <= +panelDimention.panelWidth){
        setInputError3('Roof height cannot be less than panel width');
        value = true;
    }if (+roofDimention.roofHeight <= +panelDimention.panelHeight){
        setInputError3('Roof height cannot be less than panel height');
        value = true;
    }

    if (+spacingDimention.columnSpacing < 0){
      setInputError4('Enter a value greater than or equal 0');
      value = true;
    } if (+spacingDimention.columnSpacing >= +roofDimention.roofWidth){
      setInputError4('Column spacing cannot be greater than roof width');
      value = true;
    }

    if (+spacingDimention.rowSpacing < 0){
      setInputError5('Enter a value greater or equal to 0');
      value = true;
    } if (+spacingDimention.rowSpacing >= +roofDimention.roofHeight){
      setInputError5('Row spacing cannot be greater than roof height');
      value = true;
    }

    if (+spacingDimention.edgeSpacing < 0){
      setInputError6('Enter a value greater than or equal to 0');
      value = true;
    } 

    if(value === true){
      return;
    }

    value = false;
    setInputError(false);
    setInputError1(false);
    setInputError2(false);
    setInputError3(false);
    setInputError4(false);
    setInputError5(false);
    setInputError6(false);
  
    // return the updated values to Create
    onSubmit(panelDimention,roofDimention,spacingDimention);
  }

  return (
    
    <>
     <Box display="flex"
      justifyContent="center"
       alignItems="center">
    <h3>Enter the dimentions bellow</h3></Box>
      <Paper style={{ padding: 50, margin: 16 , 
        backgroundColor: '#F8F0E3', color: '#F8F0E3'}}>
        <Grid container
        direction="column"
        justifyContent="space-around"
        alignItems="center" spacing={0}>
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
              error={panelDimention.panelWidth !== "" && inputError}
              helperText={panelDimention.panelWidth !== "" && inputError ? inputError : ' '}
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
              error={panelDimention.panelHeight !== "" && inputError1}
              helperText={panelDimention.panelHeight !== "" && inputError1 ? inputError1 : ' '}
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
              error={roofDimention.roofWidth !== "" && inputError2}
              helperText={roofDimention.roofWidth !== "" && inputError2 ? inputError2 : ' '}
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
              error={roofDimention.roofHeight !== "" && inputError3}
              helperText={roofDimention.roofHeight !== "" && inputError3 ? inputError3 : ' '}
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
              error={spacingDimention.columnSpacing!== "" && inputError4}
              helperText={spacingDimention.columnSpacing !== "" && inputError4 ? inputError4 : ' '}
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
              error={spacingDimention.rowSpacing!== "" && inputError5}
              helperText={spacingDimention.rowSpacing !== "" && inputError5 ? inputError5 : ' '}
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
              error={spacingDimention.edgeSpacing!== "" && inputError6}
              helperText={spacingDimention.edgeSpacing !== "" && inputError6 ? inputError6 : ' '}
            />
            </Grid>

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
