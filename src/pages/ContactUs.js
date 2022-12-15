// contact page

import { useState } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';


export default function Contact() {

  var Fortunes = [
    "A friend is a treasure",
    "An enemy is a lesson",
    "A journey is a reward",
    "Life is an adventure",
    "Love is a gift",
    "You will be attacked next Wednesday at 3:15 P.M. by six samurai sword wielding purple fish glued to Harley-Davidson motorcycles.",
    "Excellent time to become a missing person.",
    "Chess tonight.",
    "Your boss is a few sandwiches short of a picnic.",
    "Don’t plan any hasty moves. You’ll be evicted soon anyway.",
    "Don’t feed the bats tonight.",
    "If you think last Tuesday was a drag, wait till you see what happens tomorrow!",
    "Cheese",
    "Future looks spotty. You will spill soup in late evening.",
    "A closed mouth gathers no foot.",
    "A day for firm decisions!!!!!  Or is it?",
    "A rolling stone gathers momentum.",
    "A rose by any other name would still have thorns.",
    "It's earlier than you think.",
    "Nobody expects the Spanish Inquisition!",
    "You have been selected for a secret mission.",
    "You're being followed.",
    "You will be a winner today.",
    "Stop that.",
    "You might have mail.",
    "Why worry about tomorrow, when today is so far off?",
    "Warning: this fortune may change your life.",
    "Toto, I've a feeling we're not in Kansas any more.",
    "Today is yesterday's tomorrow.",
    "This statement is a lie.",
    "This fortune left blank intentionally.",
    "This fortune is inoperative.  Please try another.",
    "There's always one more bug."
  ];
      
  const [Fortune, setFortune] = useState(null);
  var fortuneText;
  function generateFortune() {
    const index = Math.floor(Math.random() * Fortunes.length);
    setFortune(Fortunes[index]);
    
  }
  
  function nextState(){
    let elClass = this.classList,
      spawned = "spawned",
      opened = "opened";

    // open cookie
    if (elClass.contains(spawned)) {
      elClass.remove(spawned);
      elClass.add(opened);

    // new cookie
    } else {
      elClass.remove(opened);
      elClass.add(spawned);
      generateFortune();
    }
  };

  return (
    <>
    <Box display="flex"
    justifyContent="center"
     alignItems="center" >
       
 
    <Paper style={{ padding: 50, margin: 16 , 
      backgroundColor: '#F8F0E3', color: 'black', alignText:"center"}}>
         <Box display="flex"
    justifyContent="center"  flexDirection = 'column'
     alignItems="center" >
        <p>Welcome to the Contact Us page.  Below are our ways of contact.</p>
          <p><b>Phone:  410-399-2887</b></p>
            <p><b>Email:  ezwatts@gmail.com</b></p>
               <p><b>Other Contacts</b></p>
    <p>Ace</p>
    <p>Joud</p>
    <p>Marc</p>
    <p>Tanner</p>
    <p>Zoe</p>
    <Button type="button" onClick={generateFortune} variant="contained" color="primary">
       Fortune Cookie
      </Button> 
      {Fortune && <p>{Fortune}</p>}
    </Box>
      </Paper>
      </Box>
    </>
  )
} 
