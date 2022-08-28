// react
import React, { useState } from "react";

// styles
import "../../scss/components/_projectCard.scss";

// assets
import click from "../../assets/icons/click.webp";

// interfaces
interface Props {
  id: Number;
  currentSlide: Number;
  desktop: string;
  mobile: string;
  slowScroll?: boolean;
}

const ProjectCard: React.FC<Props> = ({
  id,
  currentSlide,
  desktop,
  mobile,
  slowScroll,
}) => {
  const [hide, setHide] = useState<string>("")
  
  return (
    <div
      className={`projectCard ${id === currentSlide && "currentSlide"}`}
      id={"" + id}
    >
      <div className="projectCard__content">
        <div className="projectCard__desk">
          <img src={desktop} alt="Project in desktop view" />
        </div>

        <div className={`projectCard__mobile`}>
          {id === 0 && (
            <div
              className={`projectCard__mobile--first ${hide}`}
              onClick={() => setHide("hide")}
            >
              <img src={click} />
            </div>
          )}
          <img
            src={mobile}
            alt="Project in mobile view"
            className={`${slowScroll && "slowScroll"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
