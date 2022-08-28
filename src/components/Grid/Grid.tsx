// react
import React, { useEffect, useState } from "react";

// components
import PersonalProjects from "../PersonalProjects/PersonalProjects";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ParticleBg from "../Particles/ParticlesBg";
import Navigator from "../Navigator/Navigator";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Hero from "../Hero/Hero";

// styles
import "../../scss/components/_grid.scss";

const Grid: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)
  
  useEffect(() => {
    setProgress(100)

    setTimeout(() => {
      document.querySelector(".loadingScreen")!.classList.add("fade");
    }, 4500)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])
  
  return (
    <>
      {loading && <LoadingScreen progress={progress} />}
      <ParticleBg />
      <div className="grid">
        <Navigator />

        <Hero />

        <PersonalProjects />

        <About />

        <Contact />
      </div>
    </>
  );
};

export default Grid;
