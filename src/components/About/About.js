// react
import React, { useCallback, useEffect } from "react";

// styles
import "../../scss/components/_about.scss";

import $ from "jquery"
// import tagcanvas from "./jquery.tagcanvas"

const About = () => {
  useEffect(() => {
    // Part 1 javascript functionality ends here
    $(document).ready(function (){
      if(!$("#myCanvas").tagcanvas({
          textColour: "#08fdd8",
          outlineColour: "transparent",
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.05,
          weight: true,
      }, "tags")){
          // something went wrong hide the canvas container,
          $("#myCanvasContainer");
          console.log("went wrong");
      }
    })
  }, [])
  
  return (
      <div className="about">
        <div id="myCanvasContainer">
          <canvas width="500" height="500" id="myCanvas">
            <ul id="tags">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">ES5</a></li>
              <li><a href="#">TypeScript</a></li>
              <li><a href="#">REST</a></li>
              <li><a href="#">JSON</a></li>
              <li><a href="#">GSAP</a></li>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">Wordpress</a></li>
              <li><a href="#">PHP</a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">Node JS</a></li>
              <li><a href="#">Git</a></li>
              <li><a href="#">_lodash</a></li>
              <li><a href="#">SASS</a></li>
              <li><a href="#">JQuery</a></li>
              <li><a href="#">SQI</a></li>
              <li><a href="#">Gulp</a></li>
              <li><a href="#">npm</a></li>
              <li><a href="#">BEM</a></li>
            </ul>
          </canvas>
        </div>
      </div>
  );
};

export default About;
