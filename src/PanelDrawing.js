import {Stage, Layer,Rect} from 'react-konva'
import React, { useState,useRef } from "react";
import ReactDOM from "react-dom";


import Konva from 'konva';


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
      <Stage
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        width={900}
        height={700}
      >
        <Layer>
        <Rect
        x={0}
        y={0}
        width={600}
        height={600}
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
    );
  };
  

// function CanvasPanel({panels}) {
//     const stageRef = useRef();


//   return (
//     <>
    
//  <Stage ref={stageRef} width={600} height={600}
//       >
//       <Layer>
//       {panels.map((panel) => (
//           <Rect
//             x={panel.x}
//             y={panel.y}
//             width={panel.width}
//             height={panel.height}
//             fill={panel.fill}
//             shadowBlur={panel.shadowBlur}
//           />
//         ))}
//       <Rect
//         x={0}
//         y={0}
//         width={600}
//         height={600}
//         stroke="#000000"
//         shadowBlur={1}
//       />
//        </Layer>
//     </Stage> 
// </>
//   );
// }
