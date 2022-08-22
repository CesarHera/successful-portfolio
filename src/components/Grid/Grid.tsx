// react
import React from "react";

// components
import Hero from "../Hero/Hero";
import PersonalProjects from "../PersonalProjects/PersonalProjects";

// styles
import "../../scss/components/_grid.scss";

const Grid: React.FC = () => {
  return (
    <div className="grid">
      <Hero />

      <PersonalProjects />
    </div>
  );
};

export default Grid;
