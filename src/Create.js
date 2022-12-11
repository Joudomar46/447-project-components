import {Form} from "./Form";
import {PanelDrawing} from "./PanelDrawing";
import {Stage, Layer,Rect} from 'react-konva';

import React, { useLayoutEffect, useState } from 'react';


export function Create() {

    // Variables in order to access the submitted inputs outside of handleSubmit hook
    const [panelDimentions, setPanelDimentions] = useState("");
    const [roofDimentions, setRoofDimentions] = useState("");
    const [spacingDimentions, setSpacingDimentions] = useState("");

  const [juristictionWidth, setJuristictionWidth] = useState(0);
  const [juristictionHeight, setJuristictionHeight]= useState(0);

  const [numPanelsWide, setNumPanelsWide] = useState(0);
  const [numPanelsTall, setNumPanelsTall]= useState(0);

  const [totalPanels, setTotalPanels]= useState(0);


  
    // Initialize a new array
    const [array, setArray] = useState(new Array());

    function handleSubmit(panelDimention,roofDimention,spacingDimention) {
        setPanelDimentions(panelDimention);
        setRoofDimentions(roofDimention);
        setSpacingDimentions(spacingDimention);

        // const juristictionWidth =  Math.floor(+panelDimentions?.panelWidth 
        //   + +spacingDimentions?.columnSpacing); 
        // const juristictionHeight =  Math.floor(+panelDimentions?.panelHeight +
        //    +spacingDimentions?.rowSpacing);
        //    setJuristictionWidth(juristictionWidth); 
        //    setJuristictionHeight(juristictionHeight);
          
        //    const numPanelsWide = Math.floor(((+roofDimentions?.roofWidth - (+spacingDimentions?.edgeSpacing * 2))
        //    + +spacingDimentions?.columnSpacing) /juristictionWidth);
        //   const numPanelsTall = Math.floor(((+roofDimentions?.roofHeight - (2 * +spacingDimentions?.edgeSpacing))
        //    + +spacingDimentions?.rowSpacing) / juristictionHeight);
        //   setNumPanelsWide(numPanelsWide);
        //   setNumPanelsTall(numPanelsTall);

        //   const totalPanels = numPanelsWide * numPanelsTall;
        //   setTotalPanels(totalPanels);

             
        //   console.log('panels');

        //    console.log(totalPanels);

          
    // const objects = [];
    // let space = 100;
    // for (let i = 1; i <= totalPanels; i++) {
    //   objects.push({
    //       x: space,
    //       y: '',
    //       width: '',
    //       height: '',
    //       fill: '',
    //       shadowBlur: ''
    //   });
    //   space = space +200;
    // }

    // const panels = objects.map(obj => ({
    //   x: obj.x,
    //   y: 100,
    //   width: 100,
    //   height: 100,
    //   fill: '#00D1B2',
    //   shadowBlur: 5
    // }));
    
    // console.log(panels);

    };
    // console.log(totalPanels);

        //Get juristiction which is the space around a panel width and hight wise

    
        // Calculate the number of panels that will fit on the roof
        // This accounts for the edgespace and row/column spacing overlap
 


 

  // 

  let sum = +panelDimentions?.panelWidth + 7;

  return (
    <>
    <Form onSubmit={handleSubmit} />
    <div>Here: {sum}</div>
    {/* <PanelDrawing panels = {panels}/> */}

  
    </>
  );
}

