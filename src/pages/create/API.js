import axios from 'axios';
import React, { useState } from "react";
import {ResultsForm} from "./ResultForm";
import Table from "./Table";
import Paper from "@mui/material/Paper";


// function getDataFromAPI(requestParams)
export function DataFromAPI(infos) {
  const [error, setError] = useState(null);
  const [clicked, setClicked] = useState(false);
  
  const [acMonthly, setAcMonthly] = useState([]);
  const [solardMonthly, setSolardMonthly] = useState([]);

  const [resultsInfos, setresultsInfos] = useState("");
  const [flag,setFlag]=useState(false);

  const [showComponent, setShowComponent] = useState(false);


  // function createData(month, value,value2) {
  //   return { month, value ,value2};
  // }
  // let rows = [
  //   createData('January', '',''),
  //   createData('February', '',''),
  //   createData('March', '',''),
  //   createData('April',  '',''),
  //   createData('May',  '',''),
  //   createData('June', '',''),
  //   createData('July',  '',''),
  //   createData('August',  '',''),
  //   createData('September', '',''),
  //   createData('October',  '',''),
  //   createData('November',  '',''),
  //   createData('December',  '',''),
  // ];


    // console.log(acMonthly[i])
    let rows = [];

  

  


  function handleSubmit(
    resultsInfo
  ) {
    setresultsInfos(resultsInfo);
    setFlag(true);
  }

  if(flag && resultsInfos.address != ''){
    console.log("True");
    axios.get(`https://developer.nrel.gov/api/pvwatts/v8.json?&api_key=DEMO_KEY&azimuth=${resultsInfos.azmith}&system_capacity=4&losses=${resultsInfos.losses}&array_type=${resultsInfos.array_type}&module_type=${resultsInfos.module_type}&gcr=${resultsInfos.gcr}&dc_ac_ratio=${resultsInfos.dc_ac_ratio}&inv_eff=${resultsInfos.inv_eff}&radius=${resultsInfos.radius}&dataset=${resultsInfos.dataset}&tilt=${resultsInfos.tilt}&address=${resultsInfos.address}&soiling=12|4|45|23|9|99|67|12.54|54|9|0|7.6&albedo=0.3&bifaciality=0.7`)
      .then(response => {
        console.log(response);
        setAcMonthly(response.data.outputs.ac_monthly);
        setSolardMonthly(response.data.outputs.solard_monthly);
        rows = solardMonthly.map(value => ({value }));
        rows = acMonthly.map(value2 => ({value2 }));  
        console.log(rows);
      
      })
      .catch(err => {
        setError(err);
        console.log(err);
      })
      setFlag(false);
      setShowComponent(true);
  }

  console.log(acMonthly);

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

  // Function to handle the click event on the button
//     const handleClick = () => {
//       setClicked(true);
//     }

//   // Make a GET request to the API
//   React.useEffect(() => {
//     if (clicked) {
//     axios.get(`https://developer.nrel.gov/api/pvwatts/v8.json?&api_key=DEMO_KEY&azimuth=180&system_capacity=4&losses=14&array_type=1&module_type=0&gcr=0.4&dc_ac_ratio=1.2&inv_eff=96.0&radius=0&dataset=nsrdb&tilt=10&address=${info?.addr}&soiling=12|4|45|23|9|99|67|12.54|54|9|0|7.6&albedo=0.3&bifaciality=0.7`)
//       .then(response => {
//         console.log(response);
//         setAcMonthly(response.data.outputs.ac_monthly);
//       })
//       .catch(err => {
//         setError(err);
//         console.log(err);
//       })
//       setClicked(false);
//   }}, [clicked]);

   
// console.log(acMonthly);

//   if (error) {
    
//     return (<><button onClick={handleClick}>Click me to call the API</button>
//     <div>An error occurred: {error.message}</div></>);
//   }
// console.log({info});
return(
<>

{/* {data && data.someProperty} */}
<div>
  
<ResultsForm onClick={handleSubmit} />

{showComponent ?  <Paper style={{ padding: 50, margin: 16 , 
        backgroundColor: '#F8F0E3', color: '#F8F0E3'}}>
        <Table rows={rows}/></Paper>
        : null}
{/* <button onClick={handleClick}>Click me to call the API</button>
<ul>
      {acMonthly.map(item => (
        <li>{item}</li>
      ))}
    </ul> */}
    </div>
   
</>
)}

