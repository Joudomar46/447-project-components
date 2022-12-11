// main landing page
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from '@mui/material';
import Box from '@mui/material/Box';

import {SwipeCarousel} from "../layouts/SwipeCarousel";

export function Home() {
    return(
        //main 
        <>
         <Grid container spacing={1}>
         <Grid xs={1} spacing={2}>
         </Grid>
            <Grid item xs={5}spacing={1}>
         <SwipeCarousel/>
         </Grid>

          <Grid item xs={5}spacing={10}>
        <h1 className="headTextHeading">Welcome to EzWatts!</h1>
        <Box textAlign='center'>
        <Link to="./create/Create" underline = 'none'>
    <Button variant="contained" color="primary"href="./create/Create">
      Get Started
    </Button>
  </Link> 
  </Box>
         <p className="main-description">
                    Here at EzWatts, we believe that a person should be
                    able to have ease of access when implementing
                    solar panels for one's house.  Whether it is a company
                    or an individual, with our program you can set an outline
                    of your roof, point out your obstructions, and get an accurate
                    representation and price for the placement and installation 
                    of solar panels.
                </p>
                </Grid>
        </Grid>

  {/* <Grid item xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid>
  <Grid item xs={6} md={4}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item xs={6} md={4}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid> */}
{/* </Grid> */}

         
    
               
            </>
    )
}
