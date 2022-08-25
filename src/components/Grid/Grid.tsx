// react
import React from "react";

// components
import Hero from "../Hero/Hero";
import PersonalProjects from "../PersonalProjects/PersonalProjects";
import Navigator from "../Navigator/Navigator";

// styles
import "../../scss/components/_grid.scss";

const Grid: React.FC = () => {
  return (
    <div className="grid">
      <Navigator />
      
      <Hero />

      <PersonalProjects />
    </div>
  );
};

export default Grid;
