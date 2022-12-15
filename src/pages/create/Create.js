import { Form } from "./Form";
import { PanelDrawing } from "./PanelDrawing";
import { Stage, Layer, Rect } from "react-konva";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { DataFromAPI } from "./API";
import Modal from "@mui/material/Modal";
import {ResultsForm} from "./ResultForm";
import Button from "@mui/material/Button";


import React, { useLayoutEffect, useState } from "react";

export function Create() {
  // Variables in order to access the submitted inputs outside of handleSubmit hook
  const [panelDimentions, setPanelDimentions] = useState("");
  const [roofDimentions, setRoofDimentions] = useState("");
  const [spacingDimentions, setSpacingDimentions] = useState("");

  const [juristictionWidth, setJuristictionWidth] = useState(0);
  const [juristictionHeight, setJuristictionHeight] = useState(0);

  const [numPanelsWide, setNumPanelsWide] = useState(0);
  const [numPanelsTall, setNumPanelsTall] = useState(0);

  const [totalPanels, setTotalPanels] = useState(0);

  const [addresses, setAddresses] = useState("");

  // to remove form and show new form
  const [open, setOpen] = useState(false);
  const message = "Hello from OldComponent!";

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Initialize a new array
  const [array, setArray] = useState(new Array());

  function handleSubmit(
    panelDimention,
    roofDimention,
    spacingDimention
  ) {
    setPanelDimentions(panelDimention);
    setRoofDimentions(roofDimention);
    setSpacingDimentions(spacingDimention);

    // copy over the newly changed inputs using + to convert from string to number
    // const ratio = 1000/Math.max(roofDimention.roofWidth, roofDimention.roofHeight);
    // setPanelDimentions( +panelDimentions.panelWidth * ratio);
    // panelDimentions.panelHeight *= ratio;
    // roofDimentions.roofWidth *= ratio;
    // roofDimentions.roofHeight *= ratio;
    // spacingDimentions.rowSpacing *= ratio;
    // spacingDimentions.columnSpacing *= ratio;
    // spacingDimentions.edgeSpacing *= ratio;

    const juristictionWidth = Math.floor(
      +panelDimention.panelWidth + +spacingDimention?.columnSpacing
    );
    const juristictionHeight = Math.floor(
      +panelDimention.panelHeight + +spacingDimention.rowSpacing
    );
    setJuristictionWidth(juristictionWidth);
    setJuristictionHeight(juristictionHeight);

    const numPanelsWide = Math.floor(
      (+roofDimention.roofWidth -
        +spacingDimention.edgeSpacing * 2 +
        +spacingDimention.columnSpacing) /
        juristictionWidth
    );
    const numPanelsTall = Math.floor(
      (+roofDimention.roofHeight -
        2 * +spacingDimention.edgeSpacing +
        +spacingDimention.rowSpacing) /
        juristictionHeight
    );
    setNumPanelsWide(numPanelsWide);
    setNumPanelsTall(numPanelsTall);

    const totalPanel = numPanelsWide * numPanelsTall;
    setTotalPanels(totalPanel);
  }
  // add coordinanted for each array
  // first coordinant starts at x and y = edgeSpacing from the upper left

  const usableWidth = Math.floor(
    +roofDimentions.roofWidth - +spacingDimentions.edgeSpacing * 2
  );
  const usableHeight = Math.floor(
    +roofDimentions.roofHeight - +spacingDimentions.edgeSpacing * 2
  );
  const columnSpace = juristictionWidth - +panelDimentions.panelWidth;
  const rowSpace = juristictionHeight - +panelDimentions.panelHeight;
  let xCoord =
    +spacingDimentions.edgeSpacing +
    (((+usableWidth + +columnSpace) / +juristictionWidth - +numPanelsWide) *
      +juristictionWidth) /
      2;
  let yCoord =
    +spacingDimentions.edgeSpacing +
    (((+usableHeight + +rowSpace) / +juristictionHeight - +numPanelsTall) *
      +juristictionHeight) /
      2;
  let xCoordUpdate = xCoord;

  const objects = [];
  // for each panel set the panels to send to canvas

  for (let i = 0; i < numPanelsTall; i++) {
    //for each row
    for (let j = 0; j < numPanelsWide; j++) {
      //each column

      objects.push({
        x: xCoord,
        y: yCoord,
        width: "",
        height: "",
        fill: "",
        shadowBlur: "",
      });
      xCoord = xCoord + juristictionWidth;
    }
    xCoord = xCoordUpdate;
    yCoord = yCoord + juristictionHeight;
  }
  // create array to send to panel drawing
  const panels = objects.map((obj) => ({
    x: obj.x,
    y: obj.y,
    width: +panelDimentions.panelWidth,
    height: +panelDimentions.panelHeight,
    fill: "#22277A",
    shadowBlur: 5,
  }));
  // object to send to panel drawing
  const canvasDimenstions = {
    canvasWidth: +roofDimentions.roofWidth,
    canvasHight: +roofDimentions.roofHeight,
  };

  const info = {
    canvasWidth: +roofDimentions.roofWidth,
    canvasHight: +roofDimentions.roofHeight,
  };

  return (
    <>
      <Grid
        container
        spacing={1}
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Grid item xs={2}>
          <Box>
            <Form onSubmit={handleSubmit} />
            <Button
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
            </Modal>
          </Box>
        </Grid>

        <Grid item xs>
          <Box>
            <p> Click and drag to draw keepout sections</p>
            <Paper
              style={{
                padding: 50,
                margin: 16,
                backgroundColor: "#F8F0E3",
                color: "#F8F0E3",
              }}
            >
              <PanelDrawing
                panels={panels}
                canvasDimenstions={canvasDimenstions}
              />
            </Paper>
            <DataFromAPI info = {info}/>
          </Box>
        </Grid>
      </Grid>

   
    </>
  );
}
