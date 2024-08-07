import React from "react";
import { image } from "../data/data"; // Import the image variable

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Welcome to my portfolio page. Here you can learn more about me and my work.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
