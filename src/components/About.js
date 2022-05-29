import React from "react";
import Links from "./Links";

function About(props) {
  console.log(props.bio)
  const isBio = props.bio;
  if(('bio' in props) && (isBio !== "")){
    return <div id="about">
      <h2>About Me</h2>
      <p>{isBio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  } else {
    return <div id="about">
    <h2>About Me</h2>
    <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  </div>
  }
}
export default About;
