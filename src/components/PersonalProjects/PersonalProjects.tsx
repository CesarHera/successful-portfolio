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

// data
const projects = [0, 1, 2, 3, 4];

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
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default PersonalProjects;
