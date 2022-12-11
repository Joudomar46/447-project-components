// contact page

import { useState } from "react";

export default function Contact() {

  var Fortunes = [
    "A friend is a treasure",
    "An enemy is a lesson",
    "A journey is a reward",
    "Life is an adventure",
    "Love is a gift",
    "You will be attacked next Wednesday at 3:15 P.M. by six samurai sword wielding purple fish glued to Harley-Davidson motorcycles.",
    "Excellent time to become a missing person."
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
    <div class="contacts">
    <p>Welcome to the Contact Us page.  Below are our ways of contact.</p>
    <p><b>Phone:  410-399-2887</b></p>
    <p><b>Email:  ezwatts@gmail.com</b></p>
    <p><b>Other Contacts</b></p>
    <p>Ace</p>
    <p>Joud</p>
    <p>Marc</p>
    <p>Tanner</p>
    <p>Zoe</p>
    <button class="fc spawned" type="button" onClick={generateFortune}>
      <div class="fc-part left"></div>
      <div class="fc-part right"></div>
        <div class="fc-crumbs">
            <div class="fc-crumb"></div>
            <div class="fc-crumb"></div>
            <div class="fc-crumb"></div>
            <div class="fc-crumb"></div>
            <div class="fc-crumb"></div>
            <div class="fc-crumb"></div>
            <div class="fc-crumb"></div>
            <div class="fc-crumb"></div>
        </div>
        <div class="fc-fortune">
        <p class="fc-fortune-text">no</p>
        <p class="fc-lucky-numbers">Lucky Numbers <span>?, ?, ?, ?, ?, ?</span></p>
      </div>
</button>


    {Fortune && <p>{Fortune}</p>}
    </div>
  )
} 
