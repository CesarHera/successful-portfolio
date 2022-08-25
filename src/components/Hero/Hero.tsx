// react
import React from "react";

// assets
import profile from "../../assets/img/profile.webp";

// styles
import "../../scss/components/_hero.scss"

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__profile">
        <img src={profile} alt="Profile picture" />
      </div>

      <div className="hero__greeting">
        <h2>Hi!</h2>
        <h1>I'm Cesar</h1>
      </div>
    </section>
  );
};

export default Hero;
