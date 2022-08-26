// react
import React from "react";

// components
import PersonalProjects from "../PersonalProjects/PersonalProjects";
import ParticleBg from "../Particles/ParticlesBg";
import Navigator from "../Navigator/Navigator";
import About from "../About/About";
import Hero from "../Hero/Hero";

// styles
import "../../scss/components/_grid.scss";

const Grid: React.FC = () => {
  return (
    <>
      <ParticleBg />
      <div className="grid">
        <Navigator />

        <Hero />

        <PersonalProjects />

        <About />
      </div>
    </>
  );
};

export default Grid;
