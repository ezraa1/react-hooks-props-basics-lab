import React from "react";
import Links from "./Links";
function About({ links, bio }) {
  return (
    <div id="about">
      <h2>About Me</h2> 
      {/* <p>{bio}</p>S */}

      {bio && bio.length > 1 ? <p>{bio}</p> : null}
      
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      {  /* add your <Links /> component here */}
     
    </div>
  );
  
}

export default About;
