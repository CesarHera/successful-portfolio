// react
import React from "react";

// styles
import "../../scss/components/_about.scss";

import BarField from "../BarField/BarField";

const About: React.FC = () => {
  return (
    <div className="about" id="about">
      <div className="about__description">
        <h1>Me, myself, and web development</h1>
        <p>I first started as a freelance web desginer, then i got a job as a web
        developer, making some web apps, CRMs and landing pages for companies
        around the world in niches such as private security, e-commerce, gyms,
        food delivery and goverment projects. Since then i've been working
        remotely and i'm open to new opportunities 😎</p>
      </div>

      <div className="about__technologies">
        <BarField progress={60} label="Javascript" />
        <BarField progress={52} label="React" />
        <BarField progress={40} label="TypeScript" />
        <BarField progress={65} label="Git" />
        <BarField progress={54} label="Sass" />
        <BarField progress={27} label="GraphQL" />
        <BarField progress={20} label="Next.js" />
      </div>
    </div>
  );
};

export default About;
