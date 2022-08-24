// react
import React, { useState } from "react";

// components
import ProjectCard from "../ProjectCard/ProjectCard";

// react slick
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// styles
import "../../scss/components/_personalProjects.scss";

// assets
import euphoDesk from "../../assets/projects/euphoDesk.webp";
import euphoMobi from "../../assets/projects/euphoMobi.webp";
import mountDesk from "../../assets/projects/mountDesk.webp";
import mountMobi from "../../assets/projects/mountMobi.webp";
import gooDesk from "../../assets/projects/gooDesk.webp";
import gooMobi from "../../assets/projects/gooMobi.webp";
import weatherDesk from "../../assets/projects/weatherDesk.webp";
import weatherMobi from "../../assets/projects/weatherMobi.webp";
import pokeDesk from "../../assets/projects/pokeDesk.webp";
import pokeMobi from "../../assets/projects/pokeMobi.webp";

// data
const projects = [
  {
    desk: euphoDesk,
    mobi: euphoMobi,
  },
  {
    desk: mountDesk,
    mobi: mountMobi,
  },
  {
    desk: gooDesk,
    mobi: gooMobi,
  },
  {
    desk: weatherDesk,
    mobi: weatherMobi,
  },
  {
    desk: pokeDesk,
    mobi: pokeMobi,
  },
];

const PersonalProjects = () => {
  const [currentSlide, setCurrentSlide] = useState<Number>(0);

  const sliderSettings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    variableWidth: true,
    focusOnSelect: true,
    initialSlide: 0,
    beforeChange: (current: Number, next: Number) => setCurrentSlide(next),
  };

  return (
    <div className="pProjects">
      <Slider {...sliderSettings}>
        {projects.map((project, idx) => {
          return (
            <ProjectCard
              id={idx}
              currentSlide={currentSlide}
              key={"project" + idx}
              desktop={project.desk}
              mobile={project.mobi}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default PersonalProjects;
