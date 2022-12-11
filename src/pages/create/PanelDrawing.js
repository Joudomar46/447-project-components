import {Stage, Layer,Rect} from 'react-konva'
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Box from '@mui/material/Box';




function isPointInRectangle(x,y,rect){
  console.log(x)
  console.log(y)
  if(x>rect.x && x<rect.x+rect.width && y>rect.y 
  && y<rect.y+rect.height){
  return(true);
  } 
  return(false);
}

export const PanelDrawing = ({panels}) => {
    const [annotations, setAnnotations] = useState([]);
    const [newAnnotation, setNewAnnotation] = useState([]);

    const handleMouseDown = event => {
      if (newAnnotation.length === 0) {
        const { x, y } = event.target.getStage().getPointerPosition();
        setNewAnnotation([{ x, y, width: 0, height: 0, key: "0" }]);
      }
    };

   
    const handleMouseUp = event => {
      if (newAnnotation.length === 1) {
        const sx = newAnnotation[0].x;
        const sy = newAnnotation[0].y;
        const { x, y } = event.target.getStage().getPointerPosition();
        const annotationToAdd = {
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          key: annotations.length + 1
        };


        annotations.push(annotationToAdd);
        setNewAnnotation([]);
        setAnnotations(annotations);
        console.log(annotations)

        // get last annotation in array
        const lastIndex = annotations.length - 1;
        const lastAnnotation = annotations[lastIndex];
        const x2 = sx + (x - sx)
        const y2 = sy
        const x3 = sx
        const y3 = sy + (y - sy)
        const x4 = sx + (x - sx)
        const y4 = sy + (y - sy)
        // const allPoints = [x, y, x2, y2, x3, y3, x4, y4]
        console.log(lastAnnotation);
        
  
        for (let i = 0; i < (panels.length - 1); i++){
          const som = isPointInRectangle(sx,sy,panels[i]);
          const som1 = isPointInRectangle(x2,y2,panels[i]);
          const som2 = isPointInRectangle(x3,y3,panels[i]);
          const som3 = isPointInRectangle(x4,y4,panels[i]);

        if(som||som1||som2||som3){
          panels[i].width = 0;
          panels[i].height = 0;
          console.log('true');
        }
      }



        
      }
    };
  
    const handleMouseMove = event => {
      if (newAnnotation.length === 1) {
        const sx = newAnnotation[0].x;
        const sy = newAnnotation[0].y;
        const { x, y } = event.target.getStage().getPointerPosition();
        setNewAnnotation([
          {
            x: sx,
            y: sy,
            width: x - sx,
            height: y - sy,
            key: "0"
          }
        ]);
      }
    };
    
    const annotationsToDraw = [...annotations, ...newAnnotation];
    
    return (
      <>
      <Box>
      <Stage 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        width={500}
        height={500}
      >
        <Layer>
    
        <Rect
        x={0}
        y={0}
        width={500}
        height={500}
        stroke="#000000"
        shadowBlur={1}
      />

      {panels.map((panel) => (
          <Rect
            x={panel.x}
            y={panel.y}
            width={panel.width}
            height={panel.height}
            fill={panel.fill}
            shadowBlur={panel.shadowBlur}
          />
        ))}

          {annotationsToDraw.map(value => {
            return (
              <Rect
                x={value.x}
                y={value.y}
                width={value.width}
                height={value.height}
                fill="transparent"
                stroke="black"
              />
            );
          })}
        </Layer>
      </Stage>
      </Box>
      </>
    );
  };
  
