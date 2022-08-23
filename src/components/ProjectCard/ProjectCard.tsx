// react
import React from "react";

// styles
import "../../scss/components/_projectCard.scss";

// fake assets
import euphoDesk from "../../assets/projects/GameDev.png";
import euphoMobile from "../../assets/projects/GameDevMobile.png";

// interfaces
interface Props {
  id: Number;
  currentSlide: Number;
}

const ProjectCard: React.FC<Props> = ({ id, currentSlide }) => {
  return (
    <div
      className={`projectCard ${id === currentSlide && "currentSlide"}`}
      id={"" + id}
    >
      <div className="projectCard__content">
        <div className="projectCard__desk">
          <img src={euphoDesk} />
        </div>

        <div className="projectCard__mobile">
          <img src={euphoMobile} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
