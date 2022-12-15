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
         <Grid container spacing={1} paddingTop= '10'
  paddingRight= "5">
            <Grid item xs={6}>
         <SwipeCarousel/>
         </Grid>

          <Grid item xs={6}  container
  direction="column"
  justifyContent="space-evenly"
  alignItems="center">
        <h1 className="headTextHeading">Welcome to EzWatts!</h1>
        <Box textAlign='center' sx={{fontSize: 24}}>
        <Link to="./create/Create" underline = 'none'>
    <Button variant="contained" color="primary"href="./create/Create">
      Get Started
    </Button>
  </Link> 
  </Box>
         <p className="main-description">
         Here at EzWatts, we believe that a person should be
                    able to see what solar panels can do for THEM at the
                    low low price of absolutely FREE. Our website is user
                    friendly, aesthetically pleasing, accurate, and fun
                    for the whole family (If you know where to look ;) ).
                    Oh, and did we mention it's free?
                </p>
                </Grid>
        </Grid>
            </>
    )
}
